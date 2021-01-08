import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class DialogConfigData<D = any> {
  title: string;
  data: D | null;
  isReviewMode?: boolean;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, AfterViewInit {
  @Input() dialogConfig: DialogConfigData;

  isReviewMode: boolean;
  title: string;

  @ViewChild('target', { read: ViewContainerRef, static: true })
  vcRef: ViewContainerRef;

  componentRef: ComponentRef<any>;

  constructor(
    // tslint:disable-next-line: variable-name
    private _NgbActiveModal: NgbActiveModal,
    private resolver: ComponentFactoryResolver
  ) {}
  form: FormGroup;
  model: {};
  fields: FormlyFieldConfig[];

  ngAfterViewInit() {
    (() => {
      const node: HTMLElement | null = document.querySelector('app-dialog');
      if (node) {
        while (node.firstChild) {
          (node.parentNode as HTMLElement).insertBefore(node.firstChild, node);
        }
      }
      // make the modal scrollable by adding the class .modal-dialog-scrollable
      // here wait for one second so that we can find the .modal-dialog
      setTimeout(() => {
        const modalDialog = document.querySelector(
          '.modal-job-scrollable .modal-dialog'
        );
        if (modalDialog) {
          modalDialog.classList.add('modal-dialog-scrollable');
        }
      }, 10);
    })();
  }

  ngOnInit() {
    this.title = this.dialogConfig.title;
    const factory = this.resolver.resolveComponentFactory(
      this.dialogConfig.data
    );
    this.componentRef = this.vcRef.createComponent(factory);

    if (this.dialogConfig.isReviewMode) {
      this.isReviewMode = this.dialogConfig.isReviewMode;
    }
  }

  get activeModal() {
    return this._NgbActiveModal;
  }
}
