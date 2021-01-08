import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qa018',
  template: `
    <form [formGroup]="form" class="qaCommon">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa018Component {
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
              { value: '是', key: '01' },
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
              { value: '不適用', key: '02' },
            ],
          }
        }
      ]
    },
  ];
}
