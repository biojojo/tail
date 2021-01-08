import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qa020',
  template: `
    <form [formGroup]="form" class="qaCommon">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa020Component {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
          {
            className: 'd-block',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '往來廠商之員工整批開立薪轉戶，如往來廠商為合法登記，並可自行核對員工身分及證明薪資之合理性者。', key: '01' },
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
                { value: '往來之學校，就已完成註冊之學生可自行審核學生身分並確認其身分者。', key: '02' },
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
                { value: '可確認身分無誤者。(敘明原因)', key: '03' },
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
                { value: '僅開立支票存款帳戶(得免留存開戶影像)', key: '04' },
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
                { value: '不適用', key: '05' },
              ],
            }
          },
      ]
    },
  ];
}
