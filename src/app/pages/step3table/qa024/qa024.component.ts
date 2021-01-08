import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qa024',
  template: `
    <form [formGroup]="form" class="qaCommon">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa024Component {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
          {
            className: 'd-inline mr-5',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '不適用', key: '01' },
              ],
            }
          },
          {
            className: 'd-inline',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: false,
              name: 'qa01',
              options: [
                { value: '否', key: '02' },
              ],
            }
          },
          {
            className: 'd-block w-100',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '是，應提供經斟酌仍予開戶之原因：', key: '03' },
              ],
            }
          },
          {
            className: 'd-block w-100 textarea-cs',
            type: 'textarea',
            key: '03',
            templateOptions: {
            label: '',
          }
        }
      ]
    },
  ];
}
