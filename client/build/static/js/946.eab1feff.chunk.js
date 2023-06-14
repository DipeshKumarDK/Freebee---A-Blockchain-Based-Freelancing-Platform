"use strict";(self.webpackChunkfund_fiesta=self.webpackChunkfund_fiesta||[]).push([[946],{1946:function(t,e,r){r.r(e),r.d(e,{Split:function(){return f}});var n=r(29439),a=r(37762),s=r(74165),c=r(15861),i=r(15671),u=r(43144),o=r(8084),p=r(1583),d=r(49242),h=r(2257),l=r(34029),f=(r(80518),r(25025),r(70332),r(8455),r(26219),r(68834),r(65660),r(61303),r(71497),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(59190),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(86841),r(49561),r(80580),r(40246),r(54253),r(91559),r(40553),r(26),r(69392),r(29526),r(24601),r(46878),r(27761),r(20583),r(92355),r(84194),r(51121),r(58613),r(32484),r(78435),r(84255),r(98528),r(62555),r(82037),r(77437),r(59189),r(20737),r(78262),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(52378),r(55173),r(18281),r(31583),function(){function t(e,r,n){(0,i.Z)(this,t);var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new p.cx(e,r,s,a);(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"abi",void 0),(0,o._)(this,"metadata",void 0),(0,o._)(this,"encoder",void 0),(0,o._)(this,"estimator",void 0),(0,o._)(this,"events",void 0),(0,o._)(this,"roles",void 0),(0,o._)(this,"interceptor",void 0),(0,o._)(this,"_chainId",void 0),this._chainId=c,this.abi=s,this.contractWrapper=u,this.storage=n,this.metadata=new p.ab(this.contractWrapper,p.cP,this.storage),this.roles=new p.ac(this.contractWrapper,t.contractRoles),this.encoder=new p.aa(this.contractWrapper),this.estimator=new p.aL(this.contractWrapper),this.events=new p.aM(this.contractWrapper),this.interceptor=new p.aN(this.contractWrapper)}return(0,u.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,r,n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],r=h.O$.from(0),t.next=4,this.contractWrapper.readContract.payeeCount();case 4:n=t.sent;case 5:if(!r.lt(n)){t.next=27;break}return t.prev=6,t.next=9,this.contractWrapper.readContract.payee(r);case 9:return a=t.sent,t.t0=e,t.next=13,this.getRecipientSplitPercentage(a);case 13:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),r=r.add(1),t.next=25;break;case 18:if(t.prev=18,t.t2=t.catch(6),!("method"in t.t2)||!t.t2.method.toLowerCase().includes("payee(uint256)")){t.next=24;break}return t.abrupt("break",27);case 24:throw t.t2;case 25:t.next=5;break;case 27:return t.abrupt("return",e);case 28:case"end":return t.stop()}}),t,this,[[6,18]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,r,n,c,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllRecipients();case 2:e=t.sent,r={},n=(0,a.Z)(e),t.prev=5,n.s();case 7:if((c=n.n()).done){t.next=14;break}return i=c.value,t.next=11,this.balanceOf(i.address);case 11:r[i.address]=t.sent;case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),n.e(t.t0);case 19:return t.prev=19,n.f(),t.finish(19);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),t,this,[[5,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfTokenAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,n,c,i,u;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllRecipients();case 2:r=t.sent,n={},c=(0,a.Z)(r),t.prev=5,c.s();case 7:if((i=c.n()).done){t.next=14;break}return u=i.value,t.next=11,this.balanceOfToken(u.address,e);case 11:n[u.address]=t.sent;case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),c.e(t.t0);case 19:return t.prev=19,c.f(),t.finish(19);case 22:return t.abrupt("return",n);case 23:case"end":return t.stop()}}),t,this,[[5,16,19,22]])})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.provider.getBalance(this.getAddress());case 2:return r=t.sent,t.next=5,this.contractWrapper.readContract["totalReleased()"]();case 5:return n=t.sent,a=r.add(n),t.t0=this,t.t1=e,t.t2=a,t.next=12,this.contractWrapper.readContract["released(address)"](e);case 12:return t.t3=t.sent,t.abrupt("return",t.t0._pendingPayment.call(t.t0,t.t1,t.t2,t.t3));case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOfToken",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r){var n,a,c,i,u;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new l.CH(r,d,this.contractWrapper.getProvider()),t.next=3,n.balanceOf(this.getAddress());case 3:return a=t.sent,t.next=6,this.contractWrapper.readContract["totalReleased(address)"](r);case 6:return c=t.sent,i=a.add(c),t.t0=this,t.t1=e,t.t2=i,t.next=13,this.contractWrapper.readContract["released(address,address)"](r,e);case 13:return t.t3=t.sent,t.next=16,t.t0._pendingPayment.call(t.t0,t.t1,t.t2,t.t3);case 16:return u=t.sent,t.next=19,(0,p.aY)(this.contractWrapper.getProvider(),r,u);case 19:return t.abrupt("return",t.sent);case 20:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"getRecipientSplitPercentage",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,a,c,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(e)]);case 2:return r=t.sent,a=(0,n.Z)(r,2),c=a[0],i=a[1],t.abrupt("return",{address:e,splitPercentage:i.mul(h.O$.from(1e7)).div(c).toNumber()/1e5});case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"withdraw",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("release(address)",[e]);case 2:return t.t0=t.sent,t.abrupt("return",{receipt:t.t0});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"withdrawToken",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("release(address,address)",[r,e]);case 2:return t.t0=t.sent,t.abrupt("return",{receipt:t.t0});case 4:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"distribute",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("distribute()",[]);case 2:return t.t0=t.sent,t.abrupt("return",{receipt:t.t0});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"distributeToken",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("distribute(address)",[e]);case 2:return t.t0=t.sent,t.abrupt("return",{receipt:t.t0});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_pendingPayment",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r,n){var a,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,this.contractWrapper.readContract.shares(e);case 3:return t.t1=t.sent,a=t.t0.mul.call(t.t0,t.t1),t.t2=a,t.next=8,this.contractWrapper.readContract.totalShares();case 8:return t.t3=t.sent,c=t.t2.div.call(t.t2,t.t3),t.abrupt("return",c.sub(n));case 11:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,n,a,c,i=arguments;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=i.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=i[c];return t.abrupt("return",(r=this.contractWrapper).call.apply(r,[e].concat(a)));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}());(0,o._)(f,"contractRoles",["admin"])}}]);
//# sourceMappingURL=946.eab1feff.chunk.js.map