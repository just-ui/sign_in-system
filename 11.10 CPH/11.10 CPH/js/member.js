/*
    对于替班信息的两个按钮上右下左？？？
    考虑失败之后不刷新页面？（应参考选课系统）
    大量的有关操作后的显示信息留给经理/后端
*/
/// <reference path="./post_api.ts" />
import { get_duties, sign_in, ask_for_absent, ask_for_substitute, accept_substitute, refuse_substitute, get_substitutes, get_records } from "./post_api.js";
window.onload = function () {
    alert("loading");
    // 检查token并决定是否跳转
    for (let duty of get_duties()) {
        document.getElementById("week-table").appendChild(dutyToHTML(duty));
    }
    for (let request of get_substitutes()) {
        document.getElementById("requests-table").appendChild(substituteToHTML(request));
    }
    for (let record of get_records()) {
        document.getElementById("records-table").appendChild(recordToHTML(record));
    }
};
function dutyToHTML(duty) {
    var formElem = document.createElement("form");
    formElem.className = "form-inline";
    // 为了使Enter键仅对求替有效，将其他按钮type改为button而求替按钮为submit
    formElem.innerHTML = `
		<div class="form-group" style="margin-left:5px;margin-right:10px;background-color:${duty.relief ? "palegreen" : "palegoldenrod"}">
			<p class="form-control-static">${duty.relief ? "替班" : "正常"}</p>
		</div>
		<div class="form-group" style="margin-right:10px;">
			<p class="form-control-static">${duty.date}</p>
		</div>
		<div class="form-group" style="margin-right:10px;">
			<p class="form-control-static">${duty.weekday}${duty.shift}</p>
		</div>
		<button name="sign_in" type="button" class="btn btn-default" style="margin:2px;">到岗</button>
		<button name="absent" type="button" class="btn btn-default" style="margin:2px;">请假</button>
		<button name="substitude" type="submit" class="btn btn-default" disabled="disabled" style="margin:2px;">求替</button>
		<div class="form-group">
			<label class="sr-only" for="name">求替人</label>
			<input name="call_name" type="text" class="form-control" id="name" placeholder="求替人姓名" style="margin:2px;">
		</div>
	`;
    formElem.sign_in.disabled = !duty.onduty;
    formElem.sign_in.onclick = function () {
        if (sign_in())
            alert("签到成功！");
        else
            alert("签到失败，请稍后重试"); // 对返回值分类？比如已迟到比如不当值比如提交失败
    };
    formElem.absent.onclick = function () {
        if (ask_for_absent(duty))
            alert("请求已发送");
        else
            alert("请求发送失败，请稍后重试");
    };
    formElem.call_name.oninput = function () {
        formElem.substitude.disabled = !this.value;
    };
    formElem.substitude.onclick = function () {
        ask_for_substitute(duty, formElem.call_name.value);
    };
    return formElem;
}
function substituteToHTML(request) {
    var formElem = document.createElement("form");
    formElem.className = "form-inline";
    formElem.innerHTML = `
		<div class="form-group" style="margin-right:10px;">
			<p class="form-control-static">${request.date}</p>
		</div>
		<div class="form-group" style="margin-right:10px;">
			<p class="form-control-static">${request.weekday}${request.shift} </p>
		</div>
		<div class="form-group" style="margin-right:10px;">
			<label for="name">请求人:</label>
			<p class="form-control-static">${request.from}</p>
		</div>
		<button name="refuse" type="button" class="btn btn-default pull-right" style="margin:2px;">拒绝</button>
		<button name="accept" type="button" class="btn btn-default pull-right" style="margin:2px;">接受</button>
	`;
    formElem.accept.onclick = function () {
        accept_substitute(request);
    };
    formElem.refuse.onclick = function () {
        refuse_substitute(request);
    };
    return formElem;
}
function recordToHTML(record) {
    var trElem = document.createElement("tr");
    trElem.innerHTML = `
		<td>${record.date}</td>
		<td>${record.weekday}${record.shift}</td>
		<td>${record.status}</td>
	`;
    return trElem;
}
