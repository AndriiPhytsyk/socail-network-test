import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { PostsService } from '../../../../../services/posts.service';
import { ConfirmationDialogService } from '../../../../shared/services/confirmation-dialog.service';
import { CommentsService } from '../../../../../services/comments.service';
import { ScrollEvent } from 'ngx-scroll-event';
import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogService } from '../../../../shared/services/confirm-dialog.service';
import { DataService } from '../../../../../services/data.service';
import { Router } from '@angular/router';
import 'quill-mention';

// import { CKEditorComponent } from 'ng2-ckeditor/ckeditor.component';



@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.scss']
})

export class PostComponent implements OnInit, AfterViewInit {

  @Input() text: string;
  @Input() image: string;
  @Input() id: string;
  @Input() comments: any;
  @Output() postDeleted = new EventEmitter();

  // @ViewChild(CKEditorComponent, {static: false}) ckEditor: CKEditorComponent;


  postComment = '';
  showedCommentInput = false;
  isCommentsShown = false;
  selectedFile = null;
  forbiddenWord = 'developer';
  imagePath = '';
  url = '';
  // ckeditorContent = '<b>Hello</b>'

  isReachingBottom = new BehaviorSubject(false);
  //
  // onEditorChange(e) {
  //   console.log(e);
  // }

  // ngAfterViewChecked() {
  //   let editor = this.ckEditor.instance;
  //   editor.config.height = '400';
  //
  // }

  constructor(
    private userService: UserService,
    private postsService: PostsService,
    private confirmDialogService: ConfirmDialogService,
    private confirmationDialogService: ConfirmationDialogService,
    private commentsService: CommentsService,
    private dataService: DataService,
    private router: Router
  ) {
  }



  htmlText = '<p>Testing</p>';
  hasFocus = false;

  atValues = [
    { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
    { id: 2, value: 'Patrik Sjölin' }
  ];
  hashValues = [
    { id: 3, value: 'Fredrik Sundqvist 2' },
    { id: 4, value: 'Patrik Sjölin 2' }
  ];

  quillConfig = {
    // toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link'],
        //['link', 'image', 'video']
        ['emoji'],
      ],
      // handlers: {'emoji': function() {}}
    },
    "emoji-toolbar": true,
    "emoji-textarea": false,
    "emoji-shortname": true,

    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@', '#'],
      source: (searchTerm, renderList, mentionChar) => {
        let values;

        if (mentionChar === '@') {
          values = this.atValues;
        } else {
          values = this.hashValues;
        }

        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = [];
          for (let i = 0; i < values.length; i++) {
            if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) { matches.push(values[i]); }
          }
          renderList(matches, searchTerm);
        }
      },
    },

    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
        enter: {
          key: 13,
          handler: (range, context) => {
            console.log('enter');
            return true;
          }
        }
      }
    }
  };


  test = (event) => {
    console.log(event.keyCode);
  }

  onSelectionChanged = (event) => {
    if (event.oldRange == null) {
      this.onFocus();
    }
    if (event.range == null) {
      this.onBlur();
    }
  }

  onContentChanged = (event) => {
    // console.log(event.html);
  }

  onFocus = () => {
    console.log('On Focus');
  }
  onBlur = () => {
    console.log('Blurred');

  }




  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(36, this.comments);
  }

  deletePost(id) {
    this.confirmDialogService.confirm('Підтвердження', 'Ви дійсно хочете видалити це пост?', 'Так', 'Ні')
      .subscribe((confirmed) => {
        if (confirmed) {
          this.postsService.deletePost(id)
            .subscribe(res => {
              this.postDeleted.emit(id);
              this.router.navigate(['/users/me/posts']);
            });
        }
      });
  }


  addComment() {
    console.log(206,this.postComment);
    if (this.postComment.includes(this.forbiddenWord)) {
      this.postComment = this.postComment.replace(/developer/, '***');
    }
    if (this.selectedFile) {
      const fd = new FormData();
      fd.append('image', this.selectedFile);
      fd.append('text', this.postComment);
      this.postsService.addComment(this.id, fd)
        .subscribe(res => {
          this.comments.push(res.comment);
          this.showedCommentInput = false;
          this.postComment = '';
        });
    } else {
      this.postsService.addComment(this.id, {text: this.postComment})
        .subscribe(res => {

          this.comments.unshift(res.comment);
          this.showedCommentInput = false;
          this.postComment = '';
        });
    }
  }

  onSelectFile(event) { // called each time file input changes
    console.log(90, event);
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0] as File;
      const reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = () => { // called once readAsDataURL is completed
        if (event.target.files[0].name.includes('.docx')) {
          return this.url = '../../../../../../assets/images/upload-files/docx.png';
        }
        if (event.target.files[0].name.includes('.txt')) {
          return this.url = '../../../../../../assets/images/upload-files/txt.png';
        }
        this.url = reader.result as string; // add source to image
      };
    }
  }

  public handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom && !event.isWindowEvent) {
      this.isReachingBottom.next(true);
    }
  }

  showCommentInput() {
    this.showedCommentInput = true;
    this.isCommentsShown = true;
  }

  showComments() {
    this.showedCommentInput = !this.showedCommentInput;
    this.isCommentsShown = !this.isCommentsShown;

  }

  showCommentsCount() {
    if (this.comments) {
      let subCommentsCount = 0;
      this.comments.forEach(comment => {
        subCommentsCount += comment.responses.length;
      });

      return this.comments.length + subCommentsCount;
    }

  }

  watchInputValue() {
    this.dataService.commentInputValue(this.postComment);
  }

}

