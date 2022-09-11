import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  afuConfig = {
    multiple: false,
    formatsAllowed: ".csv, .xlsx",
    maxSize: "1",
    uploadAPI: {
      url: "https://file.io",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
      withCredentials: false,
    },
    hideUploadBtn: false,
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    hideSizeLimit: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
