import {Component, Injectable} from '@angular/core';

@Component({
    selector: 'app-video-msg',
    templateUrl: './video-msg.html',
    styleUrls: ['./video-msg.css']
})

@Injectable( {providedIn: 'root'} )
export class VideoMsg {
    cmpp = new CMPP();
    tplType = new TplType();
    receiver = new Receiver();

}

/* 创建 CMPP 账号*/
class CMPP {
}

/*修改 模板类型*/
class TplType {
}

/* 推送 回执 */
class Receiver {
    receiverOptions = [{
        id: 1,
        name: '[短信回执] -> 客户',
        placeholder: '请输入云平台批次Id',
        urlPlaceholder: '请输入客户短信回执地址',
        phoneInputDisplay: 'block',
        operatorDisplay: 'none',
    }, {
        id: 2,
        name: '[模板回执] -> 客户',
        placeholder: '请输入云平台模板Id',
        urlPlaceholder: '请输入客户模板回执地址',
        phoneInputDisplay: 'none',
        operatorDisplay: 'block',
    }, {
        id: 3,
        name: '[签名回执] -> 客户',
        placeholder: '请输入云平台签名Id',
        urlPlaceholder: '请输入客户签名回执地址',
        phoneInputDisplay: 'none',
        operatorDisplay: 'block',
    }]
    operatorOptions = ['全网', '移动', '联通', '电信'];
    receiverStatus = ['成功', '失败'];
    receiverMsgDisplay = 'none';
    receiverType = this.receiverOptions[0].placeholder;
    urlPlaceholder = this.receiverOptions[0].urlPlaceholder;
    phoneInputDisplay = this.receiverOptions[0].phoneInputDisplay;
    operatorDisplay = this.receiverOptions[0].operatorDisplay;
    changeReceiverType(event: any) {
        let value = event.target.value;
        this.receiverType = this.receiverOptions[value - 1].placeholder;
        this.urlPlaceholder = this.receiverOptions[value -1].urlPlaceholder;
        this.phoneInputDisplay = this.receiverOptions[value -1].phoneInputDisplay;
        this.operatorDisplay = this.receiverOptions[value -1].operatorDisplay;
    }

    changeStatus(event: any) {
        this.receiverMsgDisplay = event.target.value == 1? 'block' : 'none';
    }
}