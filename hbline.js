// ---------------------بسم اللَّه الرحمن الرحيم-----------------------

hblinev={};
hblines={};
hblinesqrs={};

hblined={

    hbshpdgn:null,
    hbshpdgbl:false,
    hblnmelf:null,
    hblnmelfps:null,
    hblnmelfbl:false,
    hblnmelfpsbl:false,
    hblnmx:null,
    hblnmy:null,
    hblnmel:null,
    hblnrds:{},
    hblnnelf:null,
    hblnneln:null,
    hblnnelr:null,
    hblnnele:null,
    hblnnelfps:null,

};

hbdotv={};
hbgdots={};

hbsmpl("hbsroot",{

    hbpos:"fixed",
    hbx:0,
    hby:0,
    hbp:"hbroot",
    hbtag:"svg",
    hblnbl:true,

},{

    hbwp:100,
    hbhp:100,
    hbbc:"white",

});

hbsroot=hbsmpls["hbsroot"].hbsmple;

hblinedl=function(_shpn){

    var co={};
    co.hbshpn=_shpn;
    co.hbshp=hblines[co.shpn];
    co.hbshpr=co.hbshp.hbshpr;
    co.hbshpr.remove();
    delete hblines[co.hbshpn];

};
hbdotsrp=function(_shpn){

    var co={};
    co.hbshpn=_shpn;
    hbdotdla(co.hbshpn);
    hbdot(co.hbshpn);

};
hblinecover=function(_shpn){

    var co={};
    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    hblines[co.hbshpn].hbcvrsl+=1;
    
    co.hbcvrc=co.hbshp.hbcvrsl-1;
    co.hbcvrn=`${co.hbshpn}_cvr_${co.hbcvrc}`;
    co.hbptsxy=hblineptsxy(co.hbshpn);
    hbline(co.hbcvrn,co.hbptsxy);
    hbliner(co.hbcvrn,{fl:"blue"});

    hblines[co.hbshpn].hbcvrs[co.hbcvrn]={

        hbcvrn:co.hbcvrn,
        hbcvrc:co.hbcvrc,

    };

};
hblinepts=function(_shpn,_npts){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];
    co.hbpts=co.hbshp.hbpts;
    co.hbptsl=co.hbpts.length;
    co.hbnpts=_npts;
    co.hbptsc=-1;
    co.hbptsv=null;
    co.hbptxl=null;
    co.hbptyl=null;

    co.hbnptsl=co.hbnpts.length;
    co.hbdotsbl=co.hbshp.hbdotsbl;

    while(co.hbptsc!=co.hbnptsl-1){

        co.hbptsc+=1;

        co.hbptsv=co.hbnpts[co.hbptsc];
        co.hbptxl=co.hbptsv.hbx;
        co.hbptyl=co.hbptsv.hby;

        if(co.hbptsc>co.hbptsl-1){

            if(typeof co.hbptsv.hbmd=="undefined"){

                hblinenpt(co.hbshpn,co.hbptsc,{hbx:co.hbptxl,hby:co.hbptyl});

            }
            if(typeof co.hbptsv.hbmd!="undefined"){

                hblinenpt(co.hbshpn,co.hbptsc,{hbx:co.hbptxl,hby:co.hbptyl,hbmd:co.hbmd});

            }

        }
        if(co.hbptsc<=co.hbptsl-1){

            if(typeof co.hbptsv.hbmd=="undefined"){

                hblineept(co.hbshpn,co.hbptsc,{hbx:co.hbptxl,hby:co.hbptyl});

            }
            if(typeof co.hbptsv.hbmd!="undefined"){

                hblineept(co.hbshpn,co.hbptsc,{hbx:co.hbptxl,hby:co.hbptyl,hbmd:co.hbmd});

            }

        }

    }
    if(co.hbptsc==co.hbnptsl-1){

        if(co.hbdotsbl==true){

            hbdotsrp(co.hbshpn);

        }

    }

};


hblinecoverw=function(_oshpn,_cshpn){

    var co={};
    
    co.hboshpn=_oshpn;
    co.hbcshpn=_cshpn;

    co.hboshp=hblines[co.hboshpn];
    co.hbcshp=hblines[co.hbcshpn];

    hblines[co.hboshpn].hbcvrsl+=1;

    co.hbcvrc=co.hboshp.hbcvrsl-1;
    co.hbcvrn=`${co.hboshpn}_cvr_${co.hbcvrc}`;
    co.hbptsxy=hblineptsxy(co.hboshpn);

    hblinepts(co.hbcshpn,co.hbptsxy);

};

hblinersasm=function(_shpn){

    var co={};

    co.hbshpn=_shpn;

    co.hbshp=hblines[co.hbshpn];

    co.hbpts=co.hbshp.hbpts;

    co.hbptsc=-1;

    co.hbptsv=null;
    co.hbptrs=null;

    co.hbptsnrs=``;

    while(co.hbptsc!=co.hbpts.length-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];
        co.hbptrs=co.hbptsv.hbptrs;
        co.hbptsnrs+=co.hbptrs;

    }
    if(co.hbptsc==co.hbpts.length-1){

        return co.hbptsnrs;

    }

};

hblineptsxy=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbpts=co.hbshp.hbpts;

    co.hbptsc=-1;

    co.hbptsv=null;
    co.hbptxl=null;
    co.hbptyl=null;

    co.hbptsxy=[];

    while(co.hbptsc!=co.hbpts.length-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];

        co.hbptxl=co.hbptsv.hbptxl;
        co.hbptyl=co.hbptsv.hbptyl; 

        co.hbptsxy.push({hbx:co.hbptxl,hby:co.hbptyl});

    }
    if(co.hbptsc==co.hbpts.length-1){

        return co.hbptsxy;

    }

};

hblinecls=function(_shpn,_ncb){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbshpr=co.hbshp.hbshpr;
    co.hbnclsbl=_ncb;

    co.hbptsrs=hblinersasm(co.hbshpn);

    if(co.hbnclsbl==true){

        co.hbptsnrs=co.hbptsrs+" Z";
        co.hbshpr.setAttribute("d",co.hbptsnrs);
        hblines[co.hbshpn].hbnclsbl=true;

    }
    if(co.hbnclsbl==false){

        co.hbptsnrs=co.hbptsrs;
        co.hbshpr.setAttribute("d",co.hbptsnrs);
        hblines[co.hbshpn].hbnclsbl=false;

    }


};

hblineftlyr=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbshpp=co.hbshp.hbshpp;
    co.hbshpr=co.hbshp.hbshpr;

    co.hbshpr.remove();
    co.hbshpp.appendChild(co.hbshpr);

};

hbdotftlyr=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbshpp=co.hbshp.hbshpp;
    co.hbshpr=co.hbshp.hbshpr;

    co.hbshpr.remove();
    co.hbshpp.appendChild(co.hbshpr);

    hbdotsrp(co.hbshpn);

};


hbdotg=function(_shpn,_gaxs){

    var co={};

    co.hbshpn=_shpn;
    co.hbgbaxs=_gaxs;

    hblnnel(co.hbshpn,"mousedown",(_shpn2,_gaxs2)=>{


        var co={};
        co.hbshpn=_shpn2;
        co.hbgbaxs=_gaxs2;

        co.hbshp=hblines[co.hbshpn];

        co.hblnmx=hblined.hblnmx;
        co.hblnmy=hblined.hblnmy;

        co.hbshpxl=co.hbshp.hbshpxl;
        co.hbshpyl=co.hbshp.hbshpyl;

        co.hbshpmxdf=co.hblnmx-co.hbshpxl;
        co.hbshpmydf=co.hblnmy-co.hbshpyl;

        hblinedg(co.hbshpn,true,co.hbgbaxs,(_shpn3,_mxdf,_mydf,_gbaxs3)=>{

            var co={};

            co.hbshpn=_shpn3;

            co.hbshpmxdf=_mxdf;
            co.hbshpmydf=_mydf;

            if(typeof _gbaxs3=="undefined"){_gbaxs3="xy";}

            co.hbgbaxs=_gbaxs3.toLowerCase();
            co.hblnmx=hblined.hblnmx;
            co.hblnmy=hblined.hblnmy;

            co.hbshpxl=co.hblnmx-co.hbshpmxdf;
            co.hbshpyl=co.hblnmy-co.hbshpmydf;

            if(co.hbgbaxs=="xy"){

                hblinel(co.hbshpn,{hbx:co.hbshpxl,hby:co.hbshpyl});

            }
            if(co.hbgbaxs="x"){

                hblinel(co.hbshpn,{hbx:co.hbshpxl});

            }
            if(co.hbgbaxs="y"){

                hblinel(co.hbshpn,{hby:co.hbshpyl});

            }
            hbdotsrt(co.hbshpn);

        },co.hbshpn,co.hbshpmxdf,co.hbshpmydf,co.hbgbaxs);

    },co.hbshpn,co.hbgbaxs);
    hblnnel(co.hbshpn,"mouseup",(_shpn4)=>{

        var co={};
        co.hbshpn=_shpn4;
        hblinedg(co.hbshpn,false);

    },co.hbshpn);


};
hbdotgbdl=function(_shpn){

    var co={};
    co.hbshpn=_shpn;

    hblnrel(co.hbshpn,"mousedown");
    hblnrel(co.hbshpn,"mouseup");
    hblinedg(co.hbshp,false);

};

hbdotdla=function(_shpn){

    var co={};
    
    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbdots=co.hbshp.hbdots;
    co.hbdotsc=-1;

    co.hbdotsv=null;
    co.hbdot=null;

    while(co.hbdotsc!=co.hbdots.length-1){

        co.hbdotsc+=1;
        co.hbdotsv=co.hbdots[co.hbdotsc];

        hblinedl(co.hbdotsv);

        delete hbgdots[co.hbdotsv];


    }
    if(co.hbdotsc==co.hbdots.length-1){

        delete co.hbshp.hbdots;
        hblines[co.hbshpn].hbdotsbl=false;

    }

};
hbdotdl=function(_shpn,_ptc){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbptc=_ptc;

    hblinedpt(co.hbshpn,co.hbptc);
    hbdotsrp(co.hbshpn);

};
hbdotnw=function(_shpn,_ptc,_ptxy){

    var co={};
    
    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbptc=_ptc;
    co.hbptxy=_ptxy;

    hblinenpt(co.hbshpn,co.hbptc,co.hbptxy);

    hbdotsrp(co.hbshpn);

};

hbdotsrt=function(_shpn){

    var co={};

    co.hbshpn=_shpn;

    co.hbshp=hblines[co.hbshpn];

    if(typeof co.hbshp.hbdotsbl=="boolean"){

        if(co.hbshp.hbdotsbl==true){

            co.hbdots=co.hbshp.hbdots;
            co.hbdotsc=-1;

            co.hbdotsv=null;
            co.hbdot=null;
            co.hbdotln=null;
            co.hbpshppts=null;

            while(co.hbdotsc!=co.hbdots.length-1){

                co.hbdotsc+=1;
                co.hbdotsv=co.hbdots[co.hbdotsc];

                co.hbdotln=hblines[co.hbdotsv];
                co.hbdot=hbgdots[co.hbdotsv];
                co.hbdotp=co.hbdot.hbdotp;
                co.hbdotc=co.hbdot.hbdotc;

                co.hbdothw=co.hbdot.hbdothw;
                co.hbdothh=co.hbdot.hbdothh;

                co.hbdotpshp=co.hblines[co.hbdotp];
                co.hbpshppts=co.hbdotpshp.hbpts;

                co.hbdotpt=co.hbpshppts[co.hbdotc];
                co.hbdotptxl=co.hbdotpt.hbptxl;
                co.hbdotptyl=co.hbdotpt.hbptyl;

                co.hbdotxl=co.hbdotptxl-co.hbdothw;
                co.hbdotyl=co.hbdotptyl-co.hbdothh;

                hblinel(co.hbdotsv,{hbx:co.hbdotxl,hby:co.hbdotyl});

            }

        }
            
    }

};
hbdot=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];
    
    co.hbpts=co.hbshp.hbpts;
    co.hbptsc=-1;

    co.hbptsv=null;
    co.hbptxl=null;
    co.hbptyl=null;

    co.hbdotow=3;
    co.hbdotoh=3;
    co.hbdotw=10;
    co.hbdoth=10;

    co.hbdotxl=null;
    co.hbdotyl=null;

    co.hbdothw=co.hbdotw/2;
    co.hbdothh=co.hbdoth/2;

    co.hbdotn=null;
    co.hbdotr=null;

    hblines[co.hbshpn].hbdots=[];
    hblines[co.hbshpn].hbdotsbl=true;

    while(co.hbptsc!=co.hbpts.length-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];
        co.hbptxl=co.hbptsv.hbptxl;
        co.hbptyl=co.hbptsv.hbptyl;

        co.hbdotn=`${co.hbshpn}_dot_${co.hbptsc}`;

        hbgdots[co.hbdotn]={

            hbdotn:co.hbdotn,
            hbdotc:co.hbptsc,
            hbdotp:co.hbshpn,
            hbdotw:co.hbdotw,
            hbdoth:co.hbdoth,
            hbdothw:co.hbdothw,
            hbdothh:co.hbdothh,

        };
        hblineq(co.hbdotn,"bezier");

        co.hbdotln=hblines[co.hbdotn];
        co.hbdotr=co.hbdotln.hbshpr;
        hbgdots[co.hbdotn].hbdotln=co.hbdotln;
        hbgdots[co.hbdotn].hbdotr=co.hbdotr;

        hblinesl(co.hbdotn,{hbw:co.hbdotw,hbh:co.hbdoth});

        co.hbdotxl=co.hbptxl-co.hbdothw;
        co.hbdotyl=co.hbptyl-co.hbdothh;

        hblinel(co.hbdotn,{hbx:co.hbdotxl,hby:co.hbdotyl});
        hbliner(co.hbdotn,{fl:"red"});

        hblines[co.hbshpn].hbdots.push(co.hbdotn);
        hblines[co.hbshpn].hbpts[co.hbptsc].hbdotn=co.hbdotn;
        hblines[co.hbshpn].hbpts[co.hbptsc].hbdotbl=true;

        hblnnel(co.hbdotn,"mousedown",(_dotn2)=>{

            var co={};
            co.hbdotn=_dotn2;

            hblinedg(co.hbdotn,true,"xy",(_dotn3)=>{

                var co={};

                co.hbdotn=_dotn3;
                co.hbdot=hbgdots[co.hbdotn];

                co.hbdotln=hblines[co.hbdotn];
                co.hbdotr=co.hbdot.hbdotr;
                co.hbdotc=co.hbdot.hbdotc;
                co.hbdotp=co.hbdot.hbdotp;

                co.hbdotpshp=hblines[co.hbdotp];
                co.hbdotxl=co.hbdotln.hbshpxl;
                co.hbdotyl=co.hbdotln.hbshpyl;

                co.hbdothw=co.hbdot.hbdothw;
                co.hbdothh=co.hbdot.hbdothh;

                co.hbptxl=co.hbdotxl+co.hbdothw;
                co.hbptyl=co.hbdotyl+co.hbdothw;

                hblineept(co.hbdotp,co.hbdotc,{hbx:co.hbptxl,hby:co.hbptyl});

            },co.hbdotn);

        },co.hbdotn);

        hblnnel(co.hbdotn,"mouseup",(_dotn4)=>{

            var co={};

            co.hbdotn=_dotn4;
            hblinedg(co.hbdotn,false);

        },co.hbdotn);

    }
    if(co.hbptsc==co.hbdpts.length-1){

        hblines[co.hbshpn].hbdotsc=co.hbptsc;

    }

};

hblineq=function(_shpn,_qshp,_shpl){

    var co={};

    co.hbshpn=_shpn;
    co.hbqshp=_qshp;
    if(typeof _shpl=="undefined"){_shpl={hbx:0,hby:0};};

    co.hbshpl=_shpl;

    if(typeof co.hbshpl.hbx=="undefined"){co.hbshpl.hbx=0;};
    if(typeof co.hbshpl.hby=="undefined"){co.hbshpl.hby=0;};

    co.hbshpxl=co.hbshpl.hbx;
    co.hbshpyl=co.hbshpl.hby;

    if(co.hbqshp=="square"){

        hbline(co.hbshpn,[

            {hbx:0,hby:0},
            {hbx:100,hby:0},
            {hbx:100,hby:100},
            {hbx:0,hby:100},

        ]);
        hblinel(co.hbshpn,{hbx:co.hbshpxl,hby:co.hbshpyl});

    }
    if(co.hbqshp=="bezier"){

        hbline(co.hbshpn,[

            {hbx:0,hby:50},
            {hbx:0,hby:0,hbmd:"qa"},
            {hbx:50,hby:0},
            {hbx:100,hby:0,hbmd:"qa"},
            {hbx:100,hby:50},
            {hbx:100,hby:100,hbmd:"qa"},
            {hbx:50,hby:100},
            {hbx:0,hby:100,hbmd:"qa"},
            {hbx:0,hby:50},

        ]);
        hblinel(co.hbshpn,{hbx:co.hbshpxl,hby:co.hbshpyl});

    }

};
hblinesl=function(_shpn,_shpnsl){

    var co={};

    co.hbshpn=_shpn;
    co.hbshpnsl=_shpnsl;

    co.hbnslwbl=false;
    co.hbnslhbl=false;

    co.hbwohbl=false;
    co.hbwhbl=false;
    co.hblprbl=false;

    co.hbnslw=null;
    co.hbnslh=null;

    co.hbshp=hblines[co.hbshpn];
    co.hbpts=co.hbshp.hbpts;
    co.hbptsc=-1;
    co.hbptsv=null;

    co.hbnslptx=null;
    co.hbnslpty=null;

    co.hbptxl=null;
    co.hbptyl=null;

    co.hbshpxl=null;
    co.hbshpyl=null;

    if(typeof co.hbshpnsl.hbw=="number"&&typeof co.hbshpnsl.hbh=="undefined"){

        co.hbnslw=co.hbshpnsl.hbw;

        if(co.hbnslw!=0){

            co.hbnslwbl=true;
            co.hbwohbl=true;

        }
        co.hbshpxl=co.hbshp.hbshpxl;
        co.hbshpw=co.hbshp.hbshpw;

    }
    if(typeof co.hbshpnsl.hbh=="number"&&typeof co.hbshpnsl.hbw=="undefined"){

        co.hbnslh=co.hbshpnsl.hbh;
        
        if(co.hbnslh!=0){

            co.hbnslhbl=true;
            co.hbwohbl=true;

        }
        co.hbshpyl=co.hbshp.hbshpyl;
        co.hbshph=co.hbshp.hbshph;

    }
    if(typeof co.hbshpnsl.hbw=="number"&&typeof co.hbshpnsl.hbh=="number"){

        co.hbnslw=co.hbshpnsl.hbw;
        co.hbnslh=co.hbshpnsl.hbh;

        if(co.hbnslw!=0&&co.hbnslh!=0){

            co.hbwohbl=true;
            co.hbwhbl=true;

        }
        co.hbshpxl=co.hbshp.hbshpxl;
        co.hbshpyl=co.hbshp.hbshpyl;

        co.hbshpw=co.hbshp.hbshpw;
        co.hbshph=co.hbshp.hbshph;

    }
    if(typeof co.hbshpnsl.hblpr=="boolean"){co.hblprbl=co.hbshp.hblprbl};
    if(co.hblprbl==true){

        if(co.hbnslwbl==true){

            co.hbnslwbl=false;
            co.hbwohb=true;

            co.hbwhbl=true;
            co.hbshpw=co.hbshp.hbshpw;
            co.hbshph=co.hbshp.hbshph;
            co.hbnslh=(co.hbnslw*co.hbshph)/co.hbshpw;

        }
        if(co.hbnslhbl==true){

            co.hbnslhbl=false;
            co.hbwohb=true;

            co.hbwhbl=true;
            co.hbshpw=co.hbshp.hbshpw;
            co.hbshph=co.hbshp.hbshph;
            co.hbnslw=(co.hbnslw*co.hbshph)/co.hbshph;

        }


    }
    if(co.hbwohbl==true){

        while(co.hbptsc!=co.hbpts.length-1){

            co.hbptsc+=1;
            co.hbptsv=co.hbpts[co.hbptsc];

            if(co.hbnslwbl==true){

                co.hbptxl=co.hbptsv.hbptxl;
                co.hbnslptx=(((co.hbptxl-co.hbshpxl)*co.hbnslw)/co.hbshpw)+hbshpxl;
                
                hblineept(co.hbshpn,co.hbptsc,{hbx:co.hbnslptx});

            }
            if(co.hbnslhbl==true){

                co.hbptyl=co.hbptsv.hbptyl;
                co.hbnslpty=(((co.hbptyl-co.hbshpyl)*co.hbnslh)/co.hbshph)+hbshpyl;
                
                hblineept(co.hbshpn,co.hbptsc,{hby:co.hbnslpty});

            }
            if(co.hbwhbl==true){

                co.hbptxl=co.hbptsv.hbptxl;
                co.hbptyl=co.hbptsv.hbptyl;
                co.hbnslptx=(((co.hbptxl-co.hbshpxl)*co.hbnslw)/co.hbshpw)+hbshpxl;
                co.hbnslpty=(((co.hbptyl-co.hbshpyl)*co.hbnslh)/co.hbshph)+hbshpyl;

                hblineept(co.hbshpn,co.hbptsc,{hbx:co.hbnslptx,hby:co.hbnslpty});

            }

        }
        if(co.hbptsc==co.hbpts.length-1){

            hblinexywh(co.hbshpn);

        }

    }


};
// 4:47
hblinedot=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hbline[co.hbshpn];

    co.hbpts=co.hbshp.hbpts;
    co.hbptsc=-1;
    co.hbptsv=null;

    while(co.hbptsc!=co.hbpts.length-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];

    }

};

hbliner=function(_shpn,_nshpr){

    var co={};
    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];
    co.hbshpr=co.hbshp.hbshpr;

    co.hbnshpr=_nshpr;

    if(typeof co.hbnshpr["fl"]!="undefined"){

        co.hbnshpr["fill"]=co.hbnshpr["fl"];
        delete co.hbnshpr["fl"];

    }
    if(typeof co.hbnshpr["srk"]!="undefined"){

        co.hbnshpr["stroke"]=co.hbnshpr["srk"];
        delete co.hbnshpr["srk"];

    }
    if(typeof co.hbnshpr["srkw"]!="undefined"){

        co.hbnshpr["strokeWidth"]=co.hbnshpr["srkw"];
        delete co.hbnshpr["srkw"];

    }
    Object.assign(co.hbshpr.style,co.hbnshpr);

};

hblinexy=function(_shpn){

    var co={};
    co.hbshpn=_shpn;

    co.hbshp=hblines[co.hbshpn];
    co.hbshpr=co.hbshp.hbshpr;

    co.hbshpxl=co.hbshpr.getBoundingRect().x;
    co.hbshpyl=co.hbshpr.getBoundingRect().y;

    hblines[co.hbshpn].hbshpxl=co.hbshpxl;
    hblines[co.hbshpn].hbshpyl=co.hbshpyl;

    return {hbx:co.hbshpxl,hby:co.hbshpyl};

};

hblinewh=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbshpr=co.hbshp.hbshpr;
    co.hbshpw=co.hbshpr.getBoundingRect().width;
    co.hbshph=co.hbshpr.getBoundingRect().height;

    hblines[co.hbshpn].hbshpw=co.hbshpw;
    hblines[co.hbshpn].hbshph=co.hbshph;
    return {hbw:co.hbshpw,hbh:co.hbshph};

};

hblinexywh=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];

    co.hbshpr=co.hbshp.hbshpr;
    co.hbpts=co.hbshp.hbpts;

    co.hbsmlstx=null;
    co.hbsmlsty=null;

    co.hbgrtstx=null;
    co.hbgrtsty=null;

    co.hbshpxl=null;
    co.hbshpyl=null;

    co.hbshpw=null;
    co.hbshph=null;

    co.hbptsc=-1;

    co.hbptsv=null;
    co.hbptxl=null;
    co.hbptyl=null;

    while(co.hbptsc!=co.hbpts.length-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];
        co.hbptxl=co.hbptsv.hbptxl;
        co.hbptyl=co.hbptsv.hbptyl;

        if(co.hbptsc==0){

            co.hbsmlstx=co.hbptxl;
            co.hbsmlsty=co.hbptyl;

            co.hbgrtstx=co.hbptxl;
            co.hbgrtsty=co.hbptyl;

        }
        if(co.hbptsc>=1){

            if(co.hbsmlstx>co.hbptxl){

                co.hbsmlstx=co.hbptxl;

            }
            if(co.hbsmlsty>co.hbptyl){

                co.hbsmlsty=co.hbptyl;

            }
            if(co.hbgrtstx<co.hbptxl){

                co.hbgrtstx=co.hbptxl;

            }
            if(co.hbgrtsty<co.hbptyl){

                co.hbgrtsty=co.hbptyl;

            }

        }

    }
    if(co.hbptsc==co.hbpts.length-1){

        co.hbshpxl=co.hbsmlstx;
        co.hbshpyl=co.hbsmlsty;

        co.hbshpw=co.hbgrtstx-co.hbshpxl;
        co.hbshph=co.hbgrtsty-co.hbshpyl;

        co.hbshpx2l=co.hbgrtstx;
        co.hbshpy2l=co.hbgrtsty; 

        hblines[co.hbshpn].hbshpw=co.hbshpw;
        hblines[co.hbshpn].hbshph=co.hbshph;
        hblines[co.hbshpn].hbshpxl=co.hbshpxl;
        hblines[co.hbshpn].hbshpyl=co.hbshpyl;
        hblines[co.hbshpn].hbshpx2l=co.hbshpx2l;
        hblines[co.hbshpn].hbshpy2l=co.hbshpy2l;

        return {hbx:co.hbshpxl,hby:co.hbshpyl,hbx2:co.hbshpx2l,hby2:co.hbshpy2l,hbw:co.hbshpw,hbh:co.hbshph};

    }

};

hblineER=function(_ern,_ermd){

    var co={};

    co.hbern=_ern;
    co.hbermd=_ermd;

    co.hberdt=hblined.hblnrds[co.hbern];
    co.hbrxbl=co.hberdt.hbrxbl;
    co.hbrybl=co.hberdt.hbrybl;

    co.hboshpn=co.hberdt.hboshpn;
    co.hbrshpn=co.hberdt.hbrshpn;

    co.hboshp=hblines[co.hboshpn];
    co.hbrshp=hblines[co.hbrshpn];

    co.hberxoybl=false;

    co.hboshpxl=null;
    co.hbrshpxl=null;
    co.hboshpyl=null;
    co.hbrshpyl=null;

    co.hboshprxl=null;
    co.hbrshprxl=null;
    co.hboshpryl=null;
    co.hbrshpryl=null;

    co.hbeoshpxl=null;
    co.hbershpxl=null;
    co.hbeoshpyl=null;
    co.hbershpyl=null;

    if(co.hbrxbl==true){

        co.hberxoybl=true;

        co.hboshpxl=co.hboshp.hbshpxl;
        co.hbrshpxl=co.hbrshp.hbshpxl;

        co.hboshprxl=co.hberdt.hbshprxl;
        co.hbrshprxl=co.hberdt.hbshprxl;

        if(co.hbermd=="exec-r"){

            co.hbershpxl=co.hboshpxl+co.hbrshpxl;
            hblinel(co.hbrshpn,{hbx:co.hbershpxl});

        }
        if(co.hbermd=="exec-o"){

            co.hbeoshpxl=co.hbrshpxl+co.hboshprxl;
            hblinel(co.hbrshpn,{hbx:co.hbeoshpxl});

        }

    }
    if(co.hbrybl==true){

        co.hberxoybl=true;

        co.hboshpyl=co.hboshp.hbshpyl;
        co.hbrshpyl=co.hbrshp.hbshpyl;

        co.hboshpryl=co.hberdt.hbshpryl;
        co.hbrshpryl=co.hberdt.hbshpryl;

        if(co.hbermd=="exec-r"){

            co.hbershpyl=co.hboshpyl+co.hbrshpyl;
            hblinel(co.hbrshpn,{hby:co.hbershpyl});

        }
        if(co.hbermd=="exec-o"){

            co.hbeoshpyl=co.hbrshpyl+co.hboshpryl;
            hblinel(co.hbrshpn,{hby:co.hbeoshpyl});

        }

    }

};

hblineSR=function(_srn,_oshpn,_rshpn,_sraxs){

    var co={};

    co.hbsrn=_srn;
    co.hboshpn=_oshpn;
    co.hbrshpn=_rshpn;

    if(typeof _sraxs=="undefined"){_sraxs="xy";};

    co.hbsraxs=_sraxs;

    co.hbsrxbl=false;
    co.hbsrybl=false;

    co.hbsrxoybl=false;

    if(co.hbsraxs=="x"){co.hbsrxbl=true;co.hbsrxoybl=true;};
    if(co.hbsraxs=="y"){co.hbsrybl=true;co.hbsrxoybl=true;};
    if(co.hbsraxs=="xy"){co.hbsrxbl=true;co.hbsrybl=true;co.hbsrxoybl=true;};

    co.hboshp=hblines[co.hboshpn];
    co.hbrshp=hblines[co.hbrshpn];

    if(co.hbsrxbl==true){

        co.hboshp=hblines[co.hboshpn];
        co.hbrshp=hblines[co.hbrshpn];

        if(co.hbsrxbl==true){

            co.hboshpxl=co.hboshp.hbshpxl;
            co.hbrshpxl=co.hbrshp.hbshpxl;

            co.hboshprxl=co.hboshpxl-co.hbrshpxl;
            co.hbrshprxl=co.hbrshpxl-co.hboshpxl;

        }
        if(co.hbsrybl==true){

            co.hboshpyl=co.hboshp.hbshpyl;
            co.hbrshpyl=co.hbrshp.hbshpyl;

            co.hboshpryl=co.hboshpyl-co.hbrshpyl;
            co.hbrshpryl=co.hbrshpyl-co.hboshpyl;

        }
        if(co.hbsrxoybl==true){

            hblined.hblnrds[co.hbsrn]={};
            hblined.hblnrds[co.hbsrn].hboshpn=co.hboshpn;
            hblined.hblnrds[co.hbsrn].hbrshpn=co.hbrshpn;

            hblined.hblnrds[co.hbsrn].hbraxs=co.hbsraxs;
            hblined.hblnrds[co.hbsrn].hbrxbl=co.hbsrxbl;
            hblined.hblnrds[co.hbsrn].hbrybl=co.hbsrybl;

            if(co.hbsrxbl==true){

                hblined.hblnrds[co.hbsrn].hboshpxl=co.hboshpxl;
                hblined.hblnrds[co.hbsrn].hbrshpxl=co.hbrshpxl;
                hblined.hblnrds[co.hbsrn].hboshprxl=co.hboshprxl;
                hblined.hblnrds[co.hbsrn].hbrshprxl=co.hbrshprxl;

            }
            if(co.hbsrybl==true){

                hblined.hblnrds[co.hbsrn].hboshpyl=co.hboshpyl;
                hblined.hblnrds[co.hbsrn].hbrshpyl=co.hbrshpyl;
                hblined.hblnrds[co.hbsrn].hboshpryl=co.hboshpryl;
                hblined.hblnrds[co.hbsrn].hbrshpryl=co.hbrshpryl;

            }

        }

    }

};

hblinel=function(_shpn,_shpnl){

    var co={};

    co.hbshpn=_shpn;
    co.hbshpnl=_shpnl;

    co.hbnxlbl=false;
    co.hbnylbl=false;

    co.hbshpnxl=null;
    co.hbshpnyl=null;

    if(typeof co.hbshpnl.hbx=="number"&&typeof co.hbshpnl.hby=="undefined"){

        co.hbshpnxl=co.hbshpnl.hbx;
        co.hbnxlbl=true;
        co.hbxoybl=true;

    }
    if(typeof co.hbshpnl.hby=="number"&&typeof co.hbshpnl.hbx=="undefined"){

        co.hbshpnyl=co.hbshpnl.hby;
        co.hbnylbl=true;
        co.hbxoybl=true;

    }
    if(typeof co.hbshpnl.hbx=="number"&&typeof co.hbshpnl.hby=="number"){

        co.hbshpnxl=co.hbshpnl.hbx;
        co.hbshpnyl=co.hbshpnl.hby;

        co.hbnxlbl=true;
        co.hbnylbl=true;

        co.hbxoybl=true;
        co.hbxybl=true;

    }

    co.hbshp=hblines[co.hbshpn];

    co.hbpts=co.hbshp.hbpts;
    co.hbptsc=-1;
    co.hbptsv=null;

    co.hbshpxl=co.hbshp.hbshpxl;
    co.hbshpyl=co.hbshp.hbshpyl;

    co.hbnptxl=null;
    co.hbnptyl=null;

    co.hbptxl=null;
    co.hbptyl=null;

    if(co.hbxoybl==true){

        while(co.hbptsc!=co.hbpts.length-1){

            co.hbptsc+=1;
            co.hbptsv=co.hbpts[co.hbptsc];
            
            if(co.hbnxlbl==true){

                co.hbptxl=co.hbptsv.hbptxl;
                co.hbnptxl=co.hbshpnxl+(co.hbptxl-co.hbshpxl);

            }
            if(co.hbnylbl==true){

                co.hbptyl=co.hbptsv.hbptyl;
                co.hbnptyl=co.hbshpnyl+(co.hbptyl-co.hbshpyl);

            }
            if(co.hbxybl==true){

                co.hbptxl=co.hbptsv.hbptxl;
                co.hbnptxl=co.hbshpnxl+(co.hbptxl-co.hbshpxl);
                co.hbptyl=co.hbptsv.hbptyl;
                co.hbnptyl=co.hbshpnyl+(co.hbptyl-co.hbshpyl);
                hblineept(co.hbshpn,co.hbptsc,{hbx:co.hbnptxl,hby:co.hbnptyl});

            }

        }

        if(co.hbptsc==co.hbpts.length-1){

            hblinexywh(co.hbshpn);

        }

    }

};
hblineptmd=function(_shpn,_ptc,_ptmd){


    var co={};

    co.hbshpn=_shpn;
    co.hbptc=_ptc;
    co.hbptmd=_ptmd;

    co.hbptmdsm=null;
    co.hbptrsv=null;

    if(co.hbptmd=="ma"){co.hbptmdsm="M"};
    if(co.hbptmd=="mr"){co.hbptmdsm="m"};
    if(co.hbptmd=="ca"){co.hbptmdsm="C"};
    if(co.hbptmd=="cr"){co.hbptmdsm="c"};
    if(co.hbptmd=="la"){co.hbptmdsm="L"};
    if(co.hbptmd=="lr"){co.hbptmdsm="l"};
    if(co.hbptmd=="qa"){co.hbptmdsm="Q"};
    if(co.hbptmd=="qr"){co.hbptmdsm="q"};
    if(co.hbptmd=="sa"){co.hbptmdsm="S"};
    if(co.hbptmd=="sr"){co.hbptmdsm="s"};
    if(co.hbptmd=="ta"){co.hbptmdsm="T"};
    if(co.hbptmd=="tr"){co.hbptmdsm="t"};
    if(co.hbptmd=="nn"){co.hbptmdsm=" "};

    co.hbshp=hblines[co.hbshpn];
    co.hbshpr=co.hbshp.hbshpr;

    co.hbpts=co.hbshp.hbpts;
    co.hbpt=co.hbpts[co.hbptc];
    co.hbptrmdt=co.hbpt.hbptrmdt;

    co.hbptrs=co.hbpt.hbptrs;
    co.hbptnrs=hbrepsub(co.hbptrs,co.hbptrmdt,co.hbptrmdt,co.hbptmdsm);
    
    hblines[co.hbshpn].hbpts[co.hbptc].hbptrs=co.hbptnrs;
    co.hbptsc=-1;
    co.hbptsv=null;

    co.hbptsnrs="";

    while(co.hbptsc!=co.hbpts.length-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];
        co.hbptrsv=co.hbptsv.hbptrs;
        co.hbptsnrs+=co.hbptrsv;

    }
    if(co.hbptsc==co.hbpts.length-1){

        co.hbshpr.setAttribute("d",co.hbptsnrs);
        hblines[co.hbshpn].hbptsrs=co.hbptsnrs;

    }


};

hblineptsmd=function(_shpn,_ptc,_ptmd){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];
    co.hbptc=_ptc;
    co.hbpts=co.hbshp.hbpts;
    co.hbptsl=co.hbpts.length;
    co.hbptmd=_ptmd;

    co.hbptmdrq=null;
    co.hbptmdsm=null;

    if(co.hbptmd=="ma"||co.hbptmd=="mr"||co.hbptmd=="la"||co.hbptmd=="lr"||co.hbptmd=="la"||co.hbptmd=="ta"||co.hbptmd=="tr"||co.hbptmd=="nn"){

        co.hbptmdrq=1;
        if(co.hbptc<=co.hbptsl-co.hbptmdrq){

            hblineptmd(co.hbshpn,co.hbptc,co.hbptmd);

        }


    }
    if(co.hbptmd=="qa"||co.hbptmd=="qr"||co.hbptmd=="sa"||co.hbptmd=="sr"){

        co.hbptmdrq=2;
        if(co.hbptc<=co.hbptsl-co.hbptmdrq){

            hblineptmd(co.hbshpn,co.hbptc,co.hbptmd);

        }


    }
    if(co.hbptmd=="qa"||co.hbptmd=="qr"||co.hbptmd=="sa"||co.hbptmd=="sr"){

        co.hbptmdrq=2;
        if(co.hbptc<=co.hbptsl-co.hbptmdrq){

            hblineptmd(co.hbshpn,co.hbptc,co.hbptmd);

        }


    }
    if(co.hbptmd=="ca"||co.hbptmd=="cr"){

        co.hbptmdrq=3;
        if(co.hbptc<=co.hbptsl-co.hbptmdrq){

            hblineptmd(co.hbshpn,co.hbptc,co.hbptmd);

        }


    }

};

hblinedpt=function(_shpn,_ptc){

    var co={};

    co.hbshpn=_shpn;
    co.hbptc=_ptc;

    co.hbshp=hblines[co.hbshpn];
    co.hbpts=co.hbshp.hbpts;
    
    co.hbptsc=-1;
    co.hbptsv=null;

    co.hbnpts=[];
    co.hbptrs=null;

    co.hbptsnrs="";

    co.hbshpr=co.hbshp.hbshpr;
    co.hbptxlv=null;
    co.hbptylv=null;

    co.hbnptsc=-1;
    co.hbptsmlstx=null;
    co.hbptsmlsty=null;
    co.hbptgrtstx=null;
    co.hbptgrtsty=null;

    co.hbclsbl=co.hbshp.hbclsbl;

    while(co.hbptsc!=co.hbpts.length-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];

        if(co.hbptsc!=co.hbptc){

            co.hbptrsv=co.hbptsv.hbptrs;
            co.hbnpts.push(co.hbptsv);

            co.hbptsnrs+=co.hbptrsv;
            co.hbnptsc+=1;

            co.hbptxlv=co.hbptsv.hbptxl;
            co.hbptylv=co.hbptsv.hbptyl;

        }

    }
    if(co.hbptsc==co.hbpts.length-1){

        if(co.hbclsbl==true){

            co.hbptsnrs+=" Z";

        }
        co.hbshpr.setAttribute("d",co.hbptsnrs);
        hblines[co.hbshpn].hbpts=co.hbnpts;
        hblines[co.hbshpn].hbptsrs=co.hbptsnrs;

        hblinexywh(co.hbshpn);

    }

};

hblinenpt=function(_shpn,_ptc,_npt){

    var co={};

    co.hbshpn=_shpn;
    co.hbptc=_ptc;
    co.hbnpt=_npt;

    co.hbptmdsm=null;
    co.hbshp=hblines[co.hbshpn];

    co.hbshpr=co.hbshp.hbshpr;
    co.hbpts=co.hbshp.hbpts;

    co.hbptsl=co.hbpts.length;

    co.hbptsrs=co.hbshp.hbptsrs;
    co.hbclsbl=co.hbshp.hbclsbl;

    co.hbptsc=-1;
    co.hbptsv=null;

    co.hbnpts=[];
    co.hbptsnrs="";

    co.hbptrs=null;
    co.hbptnrs=null;

    co.hbptmd=null;

    co.hbsmlstx=null;
    co.hbsmlsty=null;
    co.hbgrtstx=null;
    co.hbgrtsty=null;

    co.hbvptxl=null;
    co.hbvptyl=null;

    if(co.hbptc<=co.hbptsl){

        if(typeof co.hbnpt.hbmd=="undefined"){

            if(co.hbptc==0){

                co.hbnpt.hbmd="ma";

            }
            if(co.hbptc>=1){
                
                co.hbnpt.hbmd="la";

            }

        }
        if(typeof co.hbnpt.hbmd=="string"){

            co.hbptmd=co.hbnpt.hbmd;

        }
        if(co.hbptmd=="ma"){

            co.hbptmdsm="M";

        }
        if(co.hbptmd=="mr"){

            co.hbptmdsm="m";

        }
        if(co.hbptmd=="la"){

            co.hbptmdsm="L";

        }
        if(co.hbptmd=="lr"){

            co.hbptmdsm="l";

        }
        if(co.hbptmd=="qa"){

            co.hbptmdsm="Q";

        }
        if(co.hbptmd=="qr"){

            co.hbptmdsm="q";

        }
        if(co.hbptmd=="ca"){

            co.hbptmdsm="C";

        }
        if(co.hbptmd=="cr"){

            co.hbptmdsm="c";

        }
        if(co.hbptmd=="sa"){

            co.hbptmdsm="S";

        }
        if(co.hbptmd=="sr"){

            co.hbptmdsm="s";

        }
        if(co.hbptmd=="ta"){

            co.hbptmdsm="T";

        }
        if(co.hbptmd=="tr"){

            co.hbptmdsm="t";

        }

        co.hbshppt={};
        co.hbshppt.hbptxl=co.hbnpt.hbx;
        co.hbshppt.hbptyl=co.hbnpt.hby;

        co.hbshppt.hbptxls=String(co.hbnpt.hbx);
        co.hbshppt.hbptyls=String(co.hbnpt.hby);

        co.hbshppt.hbptxlsl=co.hbshppt.hbptxls.length;
        co.hbshppt.hbptylsl=co.hbshppt.hbptyls.length;

        co.hbshppt.hbptrs=`${co.hbptmdsm}${co.hbshppt.hbptxl},${co.hbshppt.hbptyl}`;

        co.hbshppt.hbptrsl=co.hbshppt.hbptrs.length;

        co.hbshppt.hbptrmdt=0;
        co.hbshppt.hbptrbkt=co.hbshppt.hbptrmdt+co.hbshppt.hbptxlsl+1;
        co.hbshppt.hbptrxlt=[co.hbshppt.hbptrmdt+1,co.hbshppt.hbptrbkt-1];
        co.hbshppt.hbptrylt=[co.hbshppt.hbptrbkt+1,co.hbptrsl-1];

        if(co.hbptc<co.hbptsl){

            while(co.hbptsc!=co.hbpts.length-1){

                co.hbptsc+=1;
                co.hbptsv=co.hbpts[co.hbptsc];

                co.hbptrs=co.hbptsv.hbptrs;
                co.hbvptxl=co.hbptsv.hbptxl;
                co.hbvptyl=co.hbptsv.hbptyl;
                
                if(co.hbptsc!=co.hbptc){

                    co.hbnpts.push(co.hbptsv);
                    co.hbptsnrs+=co.hbptrs;

                }
                if(co.hbptsc==co.hbptc){

                    co.hbnpts.push(co.hbshppt);
                    co.hbptsnrs+=co.hbshppt.hbptrs;

                    co.hbnpts.push(co.hbptsv);
                    co.hbptsnrs+=co.hbptrs;

                }

            }
            if(co.hbptsc==co.hbpts.length-1){

                if(co.hbclsbl==true){

                    co.hbptsnrs+=" Z";

                }
                hblines[co.hbshpn].hbptsrs=co.hbptsnrs;
                hblines[co.hbshpn].hbpts=co.hbnpts;

                hblinexywh(co.hbshpn);
                if(co.hbptc==0){

                    hblineptmd(co.hbshpn,co.hbptc+1,"la");

                }
                co.hbshpr.setAttribute("d",hblines[co.hbshpn].hbptsrs);

            }

        }
        if(co.hbptc==co.hbptsl){

            co.hbptsrsl=co.hbptsrs.length;
            co.hbptsrs+=co.hbshppt.hbptrs;

            hblines[co.hbshpn].hbpts.push(co.hbshppt);
            if(co.hbclsbl==true){

                co.hbptsnrs+=" Z";

            }
            co.hbshpr.setAttribute("d",co.hbptsrs);
            
            hblines[co.hbshpn].hbptsrs=co.hbptsrs;

        }

    }

};

hblineept=function(_shpn,_ptc,_pte){

    var co={};
    
    co.hbshpn=_shpn;

    co.hbshp=hblines[co.hbshpn];

    co.hbshpr=co.hbshp.hbshpr;
    co.hbpts=co.hbshp.hbpts;

    co.hbptc=_ptc;
    co.hbpte=_pte;

    co.hbptex=null;
    co.hbptey=null;

    co.hbptexs=null;
    co.hbpteys=null;
    co.hbptexsl=null;
    co.hbpteysl=null;

    co.hbclsbl=co.hbshp.hbclsbl;

    co.hbpt=co.hbpts[co.hbptc];
    co.hbptrs=co.hbpt.hbptrs;

    co.hbptrsl=null;
    co.hbptsnrs="";

    co.hbptnrs=null;
    co.hbptnrsl=null;
    
    co.hbptrxlt=null;
    co.hbptrylt=null;

    co.hbptsrstc=-1;
    co.hbptsrstv=null;

    co.hbptvrs=null;
    co.hbxbl=false;
    co.hbybl=false;

    co.hbxybl=false;

    co.hbptxlv=null;
    co.hbptylv=null;

    co.hbsmlstx=null;
    co.hbsmlsty=null;

    co.hbgrtstx=null;
    co.hbgrtsty=null;

    if(typeof co.hbpte.hbx=="number"&&co.hbpte.hby=="undefined"){

        co.hbxbl=true;

    }
    if(typeof co.hbpte.hbx=="undefined"&&co.hbpte.hby=="number"){

        co.hbybl=true;

    }
    if(typeof co.hbpte.hbx=="number"&&co.hbpte.hby=="number"){

        // co.hbxbl=true;
        co.hbxybl=true;

    }
    if(co.hbxbl==true){

        co.hbptex=co.hbpte.hbx;
        co.hbptexs=String(co.hbptex);
        co.hbptexsl=co.hbptexs.length;
        co.hbptrxlt=co.hbpt.hbptrxlt;

        co.hbptrsl=co.hbptrs.length;
        co.hbptnrs=hbrepsub(co.hbptrs,hbptrxlt[0],co.hbptrxlt[1],co.hbptexs);
        co.hbptnrsl=co.hbptnrs.length;

        co.hbptrmdnt=co.hbpt.hbptrmdt;

        co.hbptrbknt=co.hbptrmdnt+co.hbptexsl+1;
        co.hbptrxlnt=[co.hbptrmdnt+1,co.hbptrbknt-1];
        co.hbptrylnt=[co.hbptrbknt+1,co.hbptnrsl-1];

        co.hbpts[co.hbptc].hbptrs=co.hbptnrs;
        co.hbpts[co.hbptc].hbptrbkt=co.hbptrbknt;
        co.hbpts[co.hbptc].hbptrxlt=co.hbptrxlnt;
        co.hbpts[co.hbptc].hbptrylt=co.hbptrylnt;
        co.hbpts[co.hbptc].hbptxl=co.hbptex;
        co.hbpts[co.hbptc].hbptxls=co.hbptexs;
        co.hbpts[co.hbptc].hbptxlsl=co.hbptexsl;

        while(co.hbptsrstc!=co.hbpts.length-1){

            co.hbptsrstc+=1;
            co.hbptsrstv=co.hbpts[co.hbptsrstc];

            co.hbptvrs=co.hbptsrstv.hbptrs;
            co.hbptsnrs+=co.hbptvrs;

            co.hbptxlv=co.hbptsrstv.hbptxl;
            co.hbptylv=co.hbptsrstv.hbptyl;

        }
        if(co.hbptsrstc==co.hbpts.length-1){

            if(co.hbclsbl==true){

                co.hbptsnrs+=" Z";

            }
            co.hbshpr.setAttribute("d",co.hbptsnrs);
            hblines[co.hbshpn].hbptsrs=co.hbptsnrs;

            hblinexywh(co.hbshpn);

        }

    }
    if(co.hbybl==true){

        co.hbptey=co.hbpte.hby;
        co.hbpteys=String(co.hbptey);
        co.hbpteysl=co.hbpteys.length;
        co.hbptrylt=co.hbpt.hbptrylt;

        co.hbptrsl=co.hbptrs.length;
        co.hbptnrs=hbrepsub(co.hbptrs,hbptrylt[0],co.hbptrylt[1],co.hbpteys);
        
        co.hbptxl=co.hbpt.hbptxl;
        co.hbptxls=String(co.hbpt.hbptxl);
        co.hbptxlsl=co.hbptxls.length;
        
        co.hbptnrsl=co.hbptnrs.length;

        co.hbptrmdnt=co.hbpt.hbptrmdt;
        co.hbptrbknt=co.hbptrmdnt+co.hbptxlsl+1;
        co.hbptrxlnt=[co.hbptrmdnt+1,co.hbptrbknt-1];
        co.hbptrylnt=[co.hbptrbknt+1,co.hbptnrsl-1];

        co.hbpts[co.hbptc].hbptrs=co.hbptnrs;
        co.hbpts[co.hbptc].hbptrbkt=co.hbptrbknt;
        co.hbpts[co.hbptc].hbptrxlt=co.hbptrxlnt;
        co.hbpts[co.hbptc].hbptrylt=co.hbptrylnt;
        co.hbpts[co.hbptc].hbptyl=co.hbptey;
        co.hbpts[co.hbptc].hbptyls=co.hbpteys;
        co.hbpts[co.hbptc].hbptylsl=co.hbpteysl;

        while(co.hbptsrstc!=co.hbpts.length-1){

            co.hbptsrstc+=1;
            co.hbptsrstv=co.hbpts[co.hbptsrstc];

            co.hbptvrs=co.hbptsrstv.hbptrs;
            co.hbptsnrs+=co.hbptvrs;

            co.hbptxlv=co.hbptsrstv.hbptxl;
            co.hbptylv=co.hbptsrstv.hbptyl;

        }
        if(co.hbptsrstc==co.hbpts.length-1){

            if(co.hbclsbl==true){

                co.hbptsnrs+=" Z";

            }
            co.hbshpr.setAttribute("d",co.hbptsnrs);
            hblines[co.hbshpn].hbptsrs=co.hbptsnrs;

            hblinexywh(co.hbshpn);

        }

    }
    if(co.hbxybl==true){

        co.hbptex=co.hbpte.hbx;
        co.hbptexs=String(co.hbptex);
        co.hbptexsl=co.hbptexs.length;
        co.hbptrxlt=co.hbpt.hbptrxlt;

        co.hbptey=co.hbpte.hby;
        co.hbpteys=String(co.hbptey);
        co.hbpteysl=co.hbpteys.length;
        co.hbptrylt=co.hbpt.hbptrylt;

        co.hbptrsl=co.hbptrs.length;
        co.hbptnrs=hbrepsub(co.hbptrs,hbptrylt[0],co.hbptrylt[1],co.hbpteys);
        
        co.hbptxl=co.hbpt.hbptxl;
        co.hbptxls=String(co.hbpt.hbptxl);
        co.hbptxlsl=co.hbptxls.length;
        
        co.hbptnrsl=co.hbptnrs.length;

        co.hbptrmdnt=co.hbpt.hbptrmdt;
        co.hbptrbknt=co.hbptrmdnt+co.hbptxlsl+1;
        co.hbptrxlnt=[co.hbptrmdnt+1,co.hbptrbknt-1];
        co.hbptrylnt=[co.hbptrbknt+1,co.hbptnrsl-1];

        co.hbpts[co.hbptc].hbptrs=co.hbptnrs;
        co.hbpts[co.hbptc].hbptrbkt=co.hbptrbknt;
        co.hbpts[co.hbptc].hbptrxlt=co.hbptrxlnt;
        co.hbpts[co.hbptc].hbptrylt=co.hbptrylnt;
        co.hbpts[co.hbptc].hbptxl=co.hbptex;
        co.hbpts[co.hbptc].hbptxls=co.hbptexs;
        co.hbpts[co.hbptc].hbptxlsl=co.hbptexsl;
        co.hbpts[co.hbptc].hbptyl=co.hbptey;
        co.hbpts[co.hbptc].hbptyls=co.hbpteys;
        co.hbpts[co.hbptc].hbptylsl=co.hbpteysl;

        while(co.hbptsrstc!=co.hbpts.length-1){

            co.hbptsrstc+=1;
            co.hbptsrstv=co.hbpts[co.hbptsrstc];

            co.hbptvrs=co.hbptsrstv.hbptrs;
            co.hbptsnrs+=co.hbptvrs;

            co.hbptxlv=co.hbptsrstv.hbptxl;
            co.hbptylv=co.hbptsrstv.hbptyl;

        }
        if(co.hbptsrstc==co.hbpts.length-1){

            if(co.hbclsbl==true){

                co.hbptsnrs+=" Z";

            }
            co.hbshpr.setAttribute("d",co.hbptsnrs);
            hblines[co.hbshpn].hbptsrs=co.hbptsnrs;

            hblinexywh(co.hbshpn);

        }

    }



};
hbline=function(_shpn,_pts,_shppn){

    var co={};

    co.hbshpn=_shpn;
    co.hbpts=_pts;
    if(typeof _shppn=="undefined"){_shppn="hbsroot";};
    co.hbptsc=-1;
    co.hbptsv=null;
    co.hbptmdrq=0;
    co.hbptmdsm=null;
    co.hbptmdorq=0;
    co.hbptrs=null;
    co.hbptsl=co.hbpts.length;
    co.hbptsrs="";
    co.hbptsrsl=null;
    co.hbshpr=document.createElementNS("http://www.w3.org/2000/svg","path");

    co.hbshppn=_shppn;
    co.hbshpp=hbsmpls[co.hbshppn].hbsmple;
    co.hbshppts=[];
    co.hbshppt=null;
    co.hbptrsl=null;

    hblines[co.hbshpn]={};
    hblines[co.hbshpn].hbpts=[];

    co.hbsmlstx=null;
    co.hbsmlsty=null;
    co.hbgrtstx=null;
    co.hbgrtsty=null;

    co.hbstrkw=0;
    while(co.hbptsc!=co.hbptsl-1){

        co.hbptsc+=1;
        co.hbptsv=co.hbpts[co.hbptsc];

        co.hbshppt={};
        co.hbshppt.hbptxl=co.hbptsv.hbx;
        co.hbshppt.hbptyl=co.hbptsv.hby;

        co.hbptxls=String(co.hbshppt.hbptxl);
        co.hbptyls=String(co.hbshppt.hbptyl);

        co.hbptxlsl=co.hbptxls.length;
        co.hbptylsl=co.hbptyls.length;

        if(co.hbptmdrq==0){

            if(typeof co.hbptsv.hbmd=="undefined"){

                if(co.hbptsc==0){

                    co.hbptsv.hbmd="ma";

                }
                if(co.hbptsc>=1){

                    co.hbptsv.hbmd="la";

                }

            }
            if(typeof co.hbptsv.hbmd=="string"){

                co.hbptmd=co.hbptsv.hbmd;

            }
            if(co.hbptmd=="ma"){

                co.hbptmdsm="M";
                co.hbptmdorq=1;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="mr"){

                co.hbptmdsm="m";
                co.hbptmdorq=1;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="la"){

                co.hbptmdsm="L";
                co.hbptmdorq=1;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="lr"){

                co.hbptmdsm="l";
                co.hbptmdorq=1;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="qa"){

                co.hbptmdsm="Q";
                co.hbptmdorq=2;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="qr"){

                co.hbptmdsm="q";
                co.hbptmdorq=2;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="ca"){

                co.hbptmdsm="C";
                co.hbptmdorq=3;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="cr"){

                co.hbptmdsm="c";
                co.hbptmdorq=3;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="sa"){

                co.hbptmdsm="S";
                co.hbptmdorq=2;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="sr"){

                co.hbptmdsm="s";
                co.hbptmdorq=2;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="ta"){

                co.hbptmdsm="T";
                co.hbptmdorq=1;
                co.hbptmdrq=co.hbptmdorq;

            }
            if(co.hbptmd=="tr"){

                co.hbptmdsm="t";
                co.hbptmdorq=1;
                co.hbptmdrq=co.hbptmdorq;

            }

        }
        if(co.hbptmdrq==co.hbptmdorq){

            co.hbshppt.hbptrs=`${co.hbptmdsm}${co.hbshppt.hbptxls},${co.hbshppt.hbptyls}`;

        }
        if(co.hbptmdrq<co.hbptmdorq){

            co.hbptmdsm=" ";
            co.hbshppt.hbptrs=`${co.hbptmdsm}${co.hbshppt.hbptxls},${co.hbshppt.hbptyls}`;

        }
        co.hbptsrsl=co.hbptsrs.length;
        co.hbptsrs+=co.hbshppt.hbptrs;
        co.hbptrsl=co.hbshppt.hbptrs.length;

        co.hbshppt.hbptrmdt=0;
        co.hbshppt.hbptrbkt=co.hbshppt.hbptrmdt+co.hbshppt.hbptxlsl+1;
        co.hbshppt.hbptrxlt=[co.hbshppt.hbptrmdt+1,co.hbshppt.hbptrbkt-1];
        co.hbshppt.hbptrylt=[co.hbshppt.hbptrbkt+1,co.hbshppt.hbptrsl-1];

        hblines[co.hbshpn].hbpts.push(co.hbshppt);
        co.hbptmdrq-=1;

    }
    if(co.hbptsc==co.hbptsl-1){

        co.hbshpr.setAttribute("d",co.hbptsrs);
        co.hbshpp.appendChild(co.hbshpr);
        hblines[co.hbshpn].hbptsl=co.hbptsl;
        hblines[co.hbshpn].hbptsrs=co.hbptsrs;
        hblines[co.hbshpn].hbshppn=co.hbshppn;
        hblines[co.hbshpn].hbshpp=co.hbshpp;
        hblines[co.hbshpn].hbshpr=co.hbshpr;

        hblines[co.hbshpn].hblnels={};
        hblines[co.hbshpn].hbclsbl=false;
        hblines[co.hbshpn].hbcvrsl=0;
        hblines[co.hbshpn].hbcvrs={};

        hblinexywh(co.hbshpn);

    }

};

hblnnel=function(_shp,_lnele,_lnelf,..._lnelfps){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];
    co.hbshpr=co.hbshp.hbshpr;
    co.hblnele=_lnele;
    co.hblnelf=_lnelf;
    co.hblnelfps=_lnelfps;

    co.hblnelmf=()=>{

        if(typeof _lnelfps!="undefined"){

            _lnelf(..._lnelfps);

        }
        else{

            _lnelf();

        }

    };
    hblines[co.hbshpn].hblnels[co.hblnele]={};
    hblines[co.hbshpn].hblnels[co.hblnele].hblnele=co.hblnele;
    hblines[co.hbshpn].hblnels[co.hblnele].hblnelf=co.hblnelf;
    hblines[co.hbshpn].hblnels[co.hblnele].hblnelfps=co.hblnelfps;
    hblines[co.hbshpn].hblnels[co.hblnele].hblnelp=co.hbshpn;
    hblines[co.hbshpn].hblnels[co.hblnele].hblnelmf=co.hblnelmf;
    hblines[_shpn].hbshpr.addEventListener(_lnele,co.hblnelmf);

};

hblnrel=function(_shpn,_lnele){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];
    co.hblnele=_lnele;
    co.hblnels=co.hbshp.hblnels;
    co.hblnel=co.hblnels[co.hblnele];
    co.hblnelmf=co.hblnel.hblnelmf;

    co.hbshpr.removeEventListener(co.hblnele,co.hblnelmf);

    delete hblines[co.hbshpn].hblnels[co.hblnele];

};

hblined.hblnmel=hbsmpls["hbbody"].hbsmple.addEventListener("mouseover",(_event)=>{

    hblined.hblnmx=_event.clientX;
    hblined.hblnmy=_event.clientY;

});
hblined.hblnmel=hbsmpls["hbbody"].hbsmple.addEventListener("mousemove",(_event)=>{

    hblined.hblnmx=_event.clientX;
    hblined.hblnmy=_event.clientY;

    if(hblined.hblnmelfbl==true){

        if(hblined.hblnmelfpsbl==false){

            hblined.hblnmelf();

        }
        if(hblined.hblnmelfpsbl==true){

            hblined.hblnmelf(...hblined.hblnmelfps);

        }

    }

});

hblinedg=function(_shpn,_dgbl,_dgaxs,_fun,..._pms){

    var co={};

    co.hbshpn=_shpn;
    co.hbshp=hblines[co.hbshpn];
    co.hbdgbl=_dgbl;

    co.hbdgaxs=null;
    co.hbdgaxsbl=false;
    co.hbshpdgxl=null;
    co.hbshpdgyl=null;
    co.hbshpw=co.hbshp.hbshpw;
    co.hbshph=co.hbshp.hbshph;

    if(co.hbdgbl==false){

        hblined.hbshpdgbl=false;
        hblined.hblnmelfbl=false;
        hblined.hblnmelfpsbl=false;

    }
    if(co.hbdgbl==true){

        if(typeof _dgaxs=="undefined"){

            _dgaxs="xy";

        }
        if(typeof _dgaxs=="string"){

            co.hbdgaxs=_dgaxs;

        }
        if(hblined.hbshpdgbl==false){

            hblined.hbshpdgbl=true;
            hblined.hbshpdgn=co.hbshpn;
            hblined.hblnmelf=hblinedg;
            hblined.hblnmelfps=arguments;
            hblined.hblnmelfbl=true;
            hblined.hblnmelfpsbl=true;

        }
        if(hblined.hbshpdgbl==true){

            if(co.hbdgaxs=="x"){

                co.hbshpdgxl=hblined.hblnmx-(co.hbshpw/2);
                hblinel(co.hbshpn,{hbx:co.hbshpdgxl});

            }
            if(co.hbdgaxs=="y"){

                co.hbshpdgyl=hblined.hblnmy-(co.hbshph/2);
                hblinel(co.hbshpn,{hby:co.hbshpdgyl});

            }
            if(co.hbdgaxs=="xy"){

                co.hbshpdgxl=hblined.hblnmx-(co.hbshpw/2);
                co.hbshpdgyl=hblined.hblnmy-(co.hbshph/2);
                hblinel(co.hbshpn,{hbx:co.hbshpdgxl,hby:co.hbshpdgyl});

            }
            if(typeof _fun=="function"){

                if(typeof _pms!="undefined"){

                    _fun(..._pms);

                }
                if(typeof _pms=="undefined"){

                    _fun();

                }
                

            }


        }

    }

};

hblinegb=function(_shpn,_gbaxs){

    var co={};

    co.hbshpn=_shpn;
    co.hbgbaxs=_gbaxs;

    hblnnel(co.hbshpn,"mousedown",(_shpn,_gbaxs)=>{

        var co={};

        co.hbshpn=_shpn;
        co.hbgbaxs=_gbaxs;

        co.hbshp=hblines[co.hbshpn];
        co.hblnmx=hblined.hblnmx;
        co.hblnmy=hblined.hblnmy;

        co.hbshpxl=co.hbshp.hbshpxl;
        co.hbshpyl=co.hbshp.hbshpyl;

        co.hbshpmxdf=co.hblnmx-co.hbshpxl;
        co.hbshpmydf=co.hblnmy-co.hbshpyl;

        hblinedg(co.hbshpn,true,co.hbgbaxs,(_shpn,_shpmxdf,_shpmydf,_gbaxs)=>{

            var co={};
            
            co.hbshpn=_shpn;
            co.hbshpmxdf=_shpmxdf;
            co.hbshpmydf=_shpmydf;

            if(typeof _gbaxs=="undefined"){_gbaxs="xy";};

            co.hbgbaxs=_gbaxs;
            co.hblnmx=hblined.hblnmx;
            co.hblnmy=hblined.hblnmy;

            co.hbshpxl=co.hblnmx-co.hbshpmxdf;
            co.hbshpyl=co.hblnmy-co.hbshpmydf;

            if(co.hbgbaxs=="xy"){

                hblinel(co.hbshpn,{hbx:co.hbshpxl,hby:co.hbshpyl});

            }
            if(co.hbgbaxs=="x"){

                hblinel(co.hbshpn,{hbx:co.hbshpxl});

            }
            if(co.hbgbaxs=="y"){

                hblinel(co.hbshpn,{hbx:co.hbshpxl});

            }

        },co.hbshpn,co.hbshpmxdf,co.hbshpmydf,co.hbgbaxs);

    },co.hbshpn,co.hbgbaxs);

    hblnnel(co.hbshpn,"mouseup",(_shpn)=>{

        var co={};
        
        co.hbshpn=_shpn;
        hblinedg(co.hbshpn,false);

    },co.hbshpn);

};

hblinedgbl=function(_shpn){

    var co={};

    co.hbshpn=_shpn;
    
    hblnrel(co.hbshpn,"mousedown");
    hblnrel(co.hbshpn,"mouseup");
    hblinedg(co.hbshpn,false);

};

// ---------------------إن شاء اللَّه تعالى-----------------------------
