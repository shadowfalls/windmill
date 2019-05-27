import { Component, Input, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'my-gist',
    template: `
    <iframe #iframe type="text/javascript" width="100%" frameborder="0"></iframe>
    `,
    styleUrls: [],
    encapsulation: ViewEncapsulation.None
})
export class MyGist implements AfterViewInit {
    @ViewChild('iframe') iframe: ElementRef;
    @Input() gistId;
    @Input() file: string;

    ngAfterViewInit() {
        let fileName = (this.file) ? this.file : '';
        this.iframe.nativeElement.id = 'gist-' + this.gistId;
        let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        let content = `
          <html>
          <head>
            <base target="_parent">
          </head>
          <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
          <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js?file=${fileName}"></script>
          </body>
        </html>
        `;
        doc.open();
        doc.write(content);
        doc.close();
        // expand the iframe's height so that is doesn't display a scrollbar
        this.iframe.nativeElement.onload = function(event) {
            event.target.style.height = event.target.contentWindow.document.body.scrollHeight+'px';
        };
    }

    resizeIFrameToFitContent() {
        this.iframe.nativeElement.width  = this.iframe.nativeElement.contentWindow.document.body.scrollWidth;
        this.iframe.nativeElement.height = this.iframe.nativeElement.contentWindow.document.body.scrollHeight;
    }
}
