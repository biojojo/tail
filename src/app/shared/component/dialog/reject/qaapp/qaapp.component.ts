import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qaapp',
  template: `
    <form [formGroup]="form">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class QaAppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'reject',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: '1.自動寫入「87-曾遭拒絕開戶(防制洗錢及資恐原因)」',
        required: true,
        name: 'reject',
        options: [
          { value: '命中禁止往來名單', key: '01' },
          { value: '命中AML且為特定犯罪者', key: '02' },
          { value: '帳戶非本人使用(疑似人頭戶)', key: '03' },
          { value: '其他(疑似供洗錢或資恐使用)', key: '04' },
        ],
      },
    },
    {
      key: 'reason',
      type: 'textarea',
      templateOptions: {
        type: 'reason',
        label: '原因',
        placeholder: '請簡述拒絕開戶原因(必填)',
        required: true,
      },
    },
    {
      key: 'reject',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: '2.自動寫入「85-曾遭拒絕開戶(其他原因)」',
        required: true,
        name: 'reject',
        options: [
          { value: '應徵提證件(文件)不齊全', key: '05' },
          { value: '開戶目的不合理', key: '06' },
          { value: '薪轉戶無法確認撥薪或任職事實', key: '07' },
          { value: '其他(遭本行拒絕開戶，惟非屢洗錢或資恐原因)', key: '08' },
        ],
      },
    },
    {
      key: 'reason',
      type: 'textarea',
      templateOptions: {
        type: 'reason',
        label: '原因',
        placeholder: '請簡述拒絕開戶原因(必填)',
        required: true,
      },
    },
    {
      key: 'reject',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: '3.不寫入拒絕開戶資料',
        required: true,
        name: 'reject',
        options: [
          { value: '受監護/受輔助宣告', key: '09' },
          { value: '出生地為美國', key: '10' },
          { value: '出生地為其他國國籍(非美國)', key: '11' },
          { value: '不寫入拒絕開戶資料庫(自填原因)', key: '12' },
        ],
      },
    },
    {
      key: 'reason',
      type: 'textarea',
      templateOptions: {
        type: 'reason',
        label: '原因',
        placeholder: '請簡述拒絕開戶原因(必填)',
        required: true,
      },
    },
  ];
}
