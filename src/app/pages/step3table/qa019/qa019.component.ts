import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qa019',
  template: `
    <form [formGroup]="form" class="qaCommon">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa019Component {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
          {
            className: 'd-block mr-5',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '否', key: '01' },
              ],
            }
          },
          {
            className: 'd-block w-100 mr-5',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '是，經斟酌仍予開戶之原因：', key: '02' },
              ],
            }
          },
          {
            className: 'd-block w-100 textarea-cs',
            type: 'textarea',
            key: '02',
            templateOptions: {
            label: '',
            }
          }
      ]
    },
  ];
}
