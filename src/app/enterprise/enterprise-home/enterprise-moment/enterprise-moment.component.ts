import { Component, OnInit } from '@angular/core';
import {Moment} from '../../../model/Moment.model';
import {MomentService} from '../../../service/moment/moment.service';
import {Location} from '@angular/common';
import {Enterprise} from '../../../model/Enterprise';
import {EnterpriseService} from '../../../service/enterprise/enterprise.service';
import {LoginService} from '../../../service/login/login.service';
import {MatSnackBar} from '@angular/material';
declare var MeScroll: any;

@Component({
  selector: 'app-enterprise-moment',
  templateUrl: './enterprise-moment.component.html',
  styleUrls: ['./enterprise-moment.component.css']
})
export class EnterpriseMomentComponent implements OnInit {

  moments: Moment[];
  enterprise: Enterprise;

  targetPage: number = 1;
  totalSize: number;
  currentPageSize: number;

  public mescroll;

  constructor(private momentService$: MomentService,
              private location: Location,
              private enterpriseService$: EnterpriseService,
              private loginService$: LoginService) { }

  ngOnInit() {
    this.initMeScroll();
    this.getEnterprise();
  }

  initMeScroll() {
    this.mescroll = new MeScroll("mescroll", {
      down: {
        use: true,
        auto: false,
        callback: this.refresh
      },
      up: {
        use: true,
        auto: true,
        page: {
          num: 0,
          size: 5
        },
        callback: this.loadMore
      }
    });
  }

  refresh = () => {
    this.targetPage = 1;
    this.mescroll.resetUpScroll(true);
  };

  loadMore = () => {
    this.loadMoments(this.targetPage);
  };

  getEnterprise() {
    this.enterpriseService$.getById(1).subscribe(result => {
      this.enterprise = result;
    })
  }

  loadMoments(targetPage: number) {
    this.momentService$.getMomentsByEnterpriseId(1, true, targetPage, 5).subscribe( result => {
      if (targetPage == 1) {
        this.moments = [];
      }
      this.totalSize = result.total;
      this.currentPageSize = result.list.length;
      this.moments.push(...result.list);
      this.mescroll.endBySize(this.currentPageSize, this.totalSize);
      this.targetPage++;
      this.moments.forEach(moment => {
        this.momentService$.getMomentImgList(moment.momentId).subscribe(result => {
          moment.imgList = result
        });
        if (this.loginService$.resultUser){
          this.momentService$.hasLiked(moment.momentId, this.loginService$.resultUser.userId).subscribe( result => {
            moment.hasLiked = result;
          })
        }
        this.momentService$.getMomentLikeNum(moment.momentId).subscribe( result => {
          moment.likeNum = result
        });
        this.momentService$.getMomentLatestLikeLikst(moment.momentId, 3).subscribe( result => {
          moment.likeLatest = result;
        });
      })
    }, error2 =>  {
      this.mescroll.endErr();
    });
  }


}
