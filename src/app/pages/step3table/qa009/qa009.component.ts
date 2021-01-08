import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qa009',
  template: `
    <form [formGroup]="form" class="qaCommon qa009">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa009Component {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
          {
            className: 'd-block w-100 mb-2',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '第一證件：',
              type: 'radio',
              required: false,
              name: 'qa01',
              options: [
                { value: '已完成', key: '01' },
              ],
            }
          },
          {
            className: 'd-inline mb-2',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '第二證件名稱：',
              type: 'radio',
              required: false,
              name: 'qa01',
              options: [
                { value: '健保卡', key: '02' },
                { value: '駕照', key: '03' },
                { value: '護照', key: '04' },
                { value: '學生證', key: '05' },
                { value: '其他：', key: '06' },
              ],
            }
          },
          {
            className: 'd-inline mb-2',
            type: 'input',
            key: '06',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-block w-100 mb-2',
            type: 'input',
            key: '07',
            templateOptions: {
            label: '第二證件號碼/卡號：',
            },
          },
          {
            className: 'd-block w-100',
            type: 'input',
            key: '08',
            templateOptions: {
            label: '其他應填資料：',
            },
          }
      ]
    },
  ];
}
