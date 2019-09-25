import { Component, OnInit, ViewEncapsulation, AfterViewInit, Inject } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div style="width:250px;"><label for="Property">Property</label><ejs-multiselect id='multiselectelement' [dataSource]='data1' [placeholder]='placeholder'></ejs-multiselect></div>
  <br/>
  <div><ejs-checkbox label="Valid contracts"></ejs-checkbox>
  </div>
  <br/>
  <div>
  <div class="sort">
 Sort by
 <button ejs-button class="e-btn e-primary" >Date</button>
  </div>
  <br/>
  <div class="col-lg-12 control-section card-control-section reveal_card_layout">
    <div class="e-sample-resize-container e-card-resize-container">
        <div class='row'>
            <div class="row card-layout">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="e-card" style="text-align:center;">
                    
                        <div><img class="img-responsive" width=30% src="./assets/images/contract.png" alt="Force.com Succinctly" /><b>Contract 17058</b></div>
                        <div id="card_revealed" style="min-height:177px">
                            <div class="e-card-content" style="line-height:2.75em">
                                <table style="width: 100%;table-layout: fixed;">
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;"> Start Date </div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;width: 80px;white-space:nowrap">May 27, 2018</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;">End Date</div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;white-space:nowrap">Jul 29, 2029</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;">Tenants</div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;">Ossi</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="e-card-actions">
                                                <button id="showcarddata" onclick="location.href='https://demo.fatman.fi/contractmanagement/netti_infomaster/vuokraustiedot/sopimus.aspx?t=52&r=53&h=1217&VS=19543'" class="e-btn e-outline e-primary">
                                                    Open Contract
                                                </button>
                                            </div>
                                        </td>
                                        <td style="text-align:right">
                                            <div class="e-card-actions">
                                                <button class="e-card-btn" id="showcarddata_icon" title="Click to see more...">
                                                    <span class="e-btn-icon e-icons e-reveal-icon e-icon-right" style="margin:0"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="e-card" style="text-align:center; margin-left:300px; margin-top:-300px;">
                    
                        <div><img class="img-responsive" width=30% src="./assets/images/contract.png" alt="Force.com Succinctly" /><b>Contract 23052</b></div>
                        <div id="card_revealed" style="min-height:177px">
                            <div class="e-card-content" style="line-height:2.75em">
                                <table style="width: 100%;table-layout: fixed;">
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;"> Start Date </div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;width: 80px;white-space:nowrap">Jul 7, 2014</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;">End Date</div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;white-space:nowrap">Jul 7, 2035</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;">Tenants</div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;">Karl; Elena</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="e-card-actions">
                                                <button id="showcarddata" onclick="location.href='https://demo.fatman.fi/contractmanagement/netti_infomaster/vuokraustiedot/sopimus.aspx?t=52&r=53&h=1217&VS=19543'" class="e-btn e-outline e-primary">
                                                    Open Contract
                                                </button>
                                            </div>
                                        </td>
                                        <td style="text-align:right">
                                            <div class="e-card-actions">
                                                <button class="e-card-btn" id="showcarddata_icon" title="Click to see more...">
                                                    <span class="e-btn-icon e-icons e-reveal-icon e-icon-right" style="margin:0"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="e-card" style="text-align:center; margin-left:600px; margin-top:-300px;">
                    <div><img class="img-responsive" width=30% src="./assets/images/contract.png" alt="Force.com Succinctly" /><b>Contract 19038</b></div>
                        <div id="card_revealed" style="min-height:177px">
                            <div class="e-card-content" style="line-height:2.75em">
                                <table style="width: 100%;table-layout: fixed;">
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;"> Start Date </div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;width: 80px;white-space:nowrap">Oct 7, 2014</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;">End Date</div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;white-space:nowrap">Nov 17, 2028</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="text-align: left;font-weight: 500;">Tenants</div>
                                        </td>
                                        <td>
                                            <div style="text-align: left;">Ville</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="e-card-actions">
                                            <button id="showcarddata" onclick="location.href='https://demo.fatman.fi/contractmanagement/netti_infomaster/vuokraustiedot/sopimus.aspx?t=52&r=53&h=1217&VS=19543'" class="e-btn e-outline e-primary">
                                            Open Contract
                                        </button>
                                            </div>
                                        </td>
                                        <td style="text-align:right">
                                            <div class="e-card-actions">
                                                <button class="e-card-btn" id="showcarddata_icon" title="Click to see more...">
                                                    <span class="e-btn-icon e-icons e-reveal-icon e-icon-right" style="margin:0"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                        </div>

                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
</div>
  </div>
  `
})




export class AppComponent implements OnInit {

  public data: object[];
  public pageSettings: PageSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 10 };
  }

  public data1: string[] = ['Technopolis', 'Saterinportti', 'RautatienAsema', 'Yliopisto', 'Kaivohuone'];
  // set placeholder to MultiSelect input element
  public placeholder: string = 'Select properties';
}

export class RevealCardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
      /* On click event for Revealing hidden card elements*/
      document.getElementById('showcarddata').onclick = () => {
          let cEle: HTMLElement = document.getElementById('card_revealed');
          let cardEle: HTMLElement = <HTMLElement>cEle.parentNode.parentNode;
          let revealEle: HTMLElement = <HTMLElement>cardEle.querySelector('#card_reveal');
          revealEle.classList.add('e-reveal-show');
          revealEle.classList.remove('e-reveal-hide');
          let revealedEle: HTMLElement = <HTMLElement>cardEle.querySelector('#card_revealed');
          revealedEle.classList.add('e-reveal-hide');
          revealedEle.classList.remove('e-reveal-show');
      };

      document.getElementById('showcarddata_icon').onclick = () => {
          let cEle: HTMLElement = document.getElementById('card_revealed');
          let cardEle: HTMLElement = <HTMLElement>cEle.parentNode.parentNode;
          let revealEle: HTMLElement = <HTMLElement>cardEle.querySelector('#card_reveal');
          revealEle.classList.add('e-reveal-show');
          revealEle.classList.remove('e-reveal-hide');
          let revealedEle: HTMLElement = <HTMLElement>cardEle.querySelector('#card_revealed');
          revealedEle.classList.add('e-reveal-hide');
          revealedEle.classList.remove('e-reveal-show');
      };

      /* On click event for hidden Revealled card elements*/
      document.getElementById('card-reveal_collapse').onclick = (e: Event) => {
          let cardEle: HTMLElement = <HTMLElement>(<HTMLElement>e.currentTarget).parentNode.parentNode.parentElement;
          let revealEle: HTMLElement = <HTMLElement>cardEle.querySelector('#card_reveal');
          revealEle.classList.add('e-reveal-hide');
          revealEle.classList.remove('e-reveal-show');
          let revealedEle: HTMLElement = <HTMLElement>cardEle.querySelector('#card_revealed');
          revealedEle.classList.add('e-reveal-show');
          revealedEle.classList.remove('e-reveal-hide');
      };
  }
}
