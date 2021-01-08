import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qa002',
  template: `
    <form [formGroup]="form" class="qaCommon">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa002Component {
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
                { value: '否', key: '01' },
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
                { value: '是', key: '02' },
              ],
            }
          },
          {
            className: 'd-block w-100',
            type: 'input',
            key: '02',
            templateOptions: {
            label: '存戶若屬PEP、RCA，且尚未往來任何產品，簽准文號：',
          }
        }
      ]
    },
  ];
}
