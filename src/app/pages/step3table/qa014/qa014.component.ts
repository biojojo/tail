import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-qa014',
  template: `
    <form [formGroup]="form" class="qaCommon">
      <formly-form [model]="model" [fields]="fields"> </formly-form>
    </form>
  `,
})
export class Qa014Component {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
          // 台幣
          {
            className: 'd-block w-100 mb-2 compare-header-2',
            template: '<div>臺幣帳戶開戶目的</div>'
          },
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
              label: '證券',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '證券', key: '03' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: '04',
            templateOptions: {
              label: '信用卡',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '信用卡', key: '04' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: '05',
            templateOptions: {
              label: '借貸(授信)',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '借貸(授信)', key: '05' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: '06',
            templateOptions: {
              label: '投資',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '投資', key: '06' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: '07',
            templateOptions: {
              label: '信託',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '信託', key: '07' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: '08',
            templateOptions: {
              label: '衍生性金融商品',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '衍生性金融商品', key: '08' },
              ],
            }
          },
          {
            className: 'd-inline mr-2',
            type: 'checkbox',
            key: '09',
            templateOptions: {
              label: '其他：',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '其他', key: '09' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'input',
            key: 'c09',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-block w-100',
            template: '<div>(1)撥薪事實：《請勾選是否有撥薪代號，若無，請勾選撥薪作業執行單位，若為聯行應留存照會紀錄》</div>'
          },
          {
            className: 'd-inline mr-2',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '有撥薪代號：以e-TABS系統62710或71067交易查詢任職單位的撥薪代號：', key: 'r01' },
              ],
            }
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'r02',
            templateOptions: {
            label: '',
            },
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
                { value: '無撥薪代號：', key: 'r03' },
              ],
            }
          },
          {
            className: 'd-block w-100 ml-4',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '撥薪作業由本分行執行', key: 'r04' },
              ],
            }
          },
          {
            className: 'd-block w-100 ml-4',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '撥薪作業由聯行執行，照會紀錄', key: 'r05' },
              ],
            }
          },
          {
            className: 'd-inline ml-4 mr-2',
            template: '<div>(收話分行：</div>'
          },
          {
            key: 'r06',
            type: 'select',
            templateOptions: {
              required: false,
              options:  [
                {value: '1151', label: '北投分行'},
                {value: '0121', label: '天母分行'},
                {value: '0682	', label: '士林分行'},
                {value: '2653	', label: '蘭雅分行'},
                {value: '2701', label: '文昌分行'},
                {value: '0659', label: '世貿分行'},
                {value: '0372', label: '松山分行'},
                {value: '0785', label: '永春分行'},
                {value: '0796', label: '萬華分行'},
                {value: '2125	', label: '敦化分行'},
                {value: '2011	', label: '仁愛分行'},
                {value: '2273	', label: '信安分行'},
                {value: '2675', label: '和平分行'},
                {value: '0110	', label: '忠孝分行'},
                {value: '0279', label: '安和分行'},
                ]
            }
          },
          {
            className: 'd-inline ml-2 mr-2',
            template: '<div>，收話人</div>'
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'r07',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-inline ml-2',
            template: '<div>)</div>'
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
                { value: 'B2B撥薪', key: 'r08' },
              ],
            }
          },
          {
            className: 'd-block w-100 mt-2 mb-2',
            template: '<div class="clearfix"></div>'
          },
          {
            className: 'd-block w-100',
            template: '<div>(2)任職事實：</div>'
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
                { value: '於存戶任職單位辦理對保', key: 'r09' },
              ],
            }
          },
          {
            className: 'd-inline mr-2',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '已向任職單位電話照會存戶任職事實及確認此帳戶係為入薪使用，照會電話', key: 'r10' },
              ],
            }
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'r11',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-inline ml-2 mr-2',
            template: '<div>，收話人</div>'
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'r12',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-block w-100 mt-2 mb-2',
            template: '<div class="clearfix"></div>'
          },
          // 外幣
          {
            className: 'd-block w-100 mb-2 compare-header-2',
            template: '<div>外幣帳戶開戶目的</div>'
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx01',
            templateOptions: {
              label: '存款',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '存款', key: 'fx01' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx02',
            templateOptions: {
              label: '授信',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '授信', key: 'fx02' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx03',
            templateOptions: {
              label: '證券',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '證券', key: 'fx03' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx04',
            templateOptions: {
              label: '信用卡',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '信用卡', key: 'fx04' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx05',
            templateOptions: {
              label: '借貸(授信)',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '借貸(授信)', key: 'fx05' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx06',
            templateOptions: {
              label: '投資',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '投資', key: 'fx06' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx07',
            templateOptions: {
              label: '信託',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '信託', key: 'fx07' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'checkbox',
            key: 'fx08',
            templateOptions: {
              label: '衍生性金融商品',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '衍生性金融商品', key: 'fx08' },
              ],
            }
          },
          {
            className: 'd-inline mr-2',
            type: 'checkbox',
            key: 'fx09',
            templateOptions: {
              label: '其他：',
              type: 'checkbox',
              required: false,
              name: 'qa01',
              options: [
                { value: '其他', key: 'fx09' },
              ],
            }
          },
          {
            className: 'd-inline mr-4',
            type: 'input',
            key: 'fxc09',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-block w-100',
            template: '<div>(1)撥薪事實：《請勾選是否有撥薪代號，若無，請勾選撥薪作業執行單位，若為聯行應留存照會紀錄》</div>'
          },
          {
            className: 'd-inline mr-2',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '有撥薪代號：以e-TABS系統62710或71067交易查詢任職單位的撥薪代號：', key: 'fxr01' },
              ],
            }
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'fxr02',
            templateOptions: {
            label: '',
            },
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
                { value: '無撥薪代號：', key: 'fxr03' },
              ],
            }
          },
          {
            className: 'd-block w-100 ml-4',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '撥薪作業由本分行執行', key: 'fxr04' },
              ],
            }
          },
          {
            className: 'd-block w-100 ml-4',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '撥薪作業由聯行執行，照會紀錄', key: 'fxr05' },
              ],
            }
          },
          {
            className: 'd-inline ml-4 mr-2',
            template: '<div>(收話分行：</div>'
          },
          {
            key: 'fxr06',
            type: 'select',
            templateOptions: {
              required: false,
              options:  [
                {value: '1151', label: '北投分行'},
                {value: '0121', label: '天母分行'},
                {value: '0682	', label: '士林分行'},
                {value: '2653	', label: '蘭雅分行'},
                {value: '2701', label: '文昌分行'},
                {value: '0659', label: '世貿分行'},
                {value: '0372', label: '松山分行'},
                {value: '0785', label: '永春分行'},
                {value: '0796', label: '萬華分行'},
                {value: '2125	', label: '敦化分行'},
                {value: '2011	', label: '仁愛分行'},
                {value: '2273	', label: '信安分行'},
                {value: '2675', label: '和平分行'},
                {value: '0110	', label: '忠孝分行'},
                {value: '0279', label: '安和分行'},
                ]
            }
          },
          {
            className: 'd-inline ml-2 mr-2',
            template: '<div>，收話人</div>'
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'fxr07',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-inline ml-2',
            template: '<div>)</div>'
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
                { value: 'B2B撥薪', key: 'fxr08' },
              ],
            }
          },
          {
            className: 'd-block w-100 mt-2 mb-2',
            template: '<div class="clearfix"></div>'
          },
          {
            className: 'd-block w-100',
            template: '<div>(2)任職事實：</div>'
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
                { value: '於存戶任職單位辦理對保', key: 'fxr09' },
              ],
            }
          },
          {
            className: 'd-inline mr-2',
            type: 'radio',
            key: 'questionCommon',
            templateOptions: {
              label: '',
              type: 'radio',
              required: true,
              name: 'qa01',
              options: [
                { value: '已向任職單位電話照會存戶任職事實及確認此帳戶係為入薪使用，照會電話', key: 'fxr10' },
              ],
            }
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'fxr11',
            templateOptions: {
            label: '',
            },
          },
          {
            className: 'd-inline ml-2 mr-2',
            template: '<div>，收話人</div>'
          },
          {
            className: 'd-inline',
            type: 'input',
            key: 'fxr12',
            templateOptions: {
            label: '',
            },
          }
      ]
    },
  ];
}
