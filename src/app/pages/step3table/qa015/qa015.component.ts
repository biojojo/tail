import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-qa015',
  template: `
    <form [formGroup]="form" class="qaCommon">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa015Component {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      key: 'multicheckbox',
      wrappers: ['form-field'],
      fieldGroup: [
        {
          className: 'd-inline mr-4',
          type: 'checkbox',
          key: '01',
          templateOptions: {
            label: '存款',
            type: 'checkbox',
            required: false,
            name: 'qa01',
            options: [
              { value: '存款', key: '01' },
            ],
          }
        },
        {
          className: 'd-inline mr-4',
          type: 'checkbox',
          key: '02',
          templateOptions: {
            label: '授信',
            type: 'checkbox',
            required: false,
            name: 'qa01',
            options: [
              { value: '授信', key: '02' },
            ],
          }
        },
        {
          className: 'd-inline mr-4',
          type: 'checkbox',
          key: '03',
          templateOptions: {
            label: '小額信貸',
            type: 'checkbox',
            required: false,
            name: 'qa01',
            options: [
              { value: '小額信貸', key: '03' },
            ],
          }
        },
        {
          className: 'd-inline mr-4',
          type: 'checkbox',
          key: '04',
          templateOptions: {
            label: '基金',
            type: 'checkbox',
            required: false,
            name: 'qa01',
            options: [
              { value: '基金', key: '04' },
            ],
          }
        },
        {
          className: 'd-inline mr-4',
          type: 'checkbox',
          key: '05',
          templateOptions: {
            label: '信用卡',
            type: 'checkbox',
            required: false,
            name: 'qa01',
            options: [
              { value: '信用卡', key: '05' },
            ],
          }
        },
        {
          className: 'd-inline mr-2',
          type: 'checkbox',
          key: '06',
          templateOptions: {
            label: '其他：',
            type: 'checkbox',
            required: false,
            name: 'qa01',
            options: [
              { value: '其他', key: '06' },
            ],
          }
        },
        {
          className: 'd-inline mr-4',
          type: 'input',
          key: '07',
          templateOptions: {
          label: '',
          },
        },
        {
          className: 'd-inline mr-4',
          type: 'checkbox',
          key: '08',
          templateOptions: {
            label: '尚未往來',
            type: 'checkbox',
            required: false,
            name: 'qa01',
            options: [
              { value: '尚未往來', key: '08' },
            ],
          }
        },
      ]
    },
  ];
}
