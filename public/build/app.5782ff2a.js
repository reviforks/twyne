(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{EedU:function(t,e,n){n("QWBl"),n("DQNa"),n("FZtP"),document.body.querySelectorAll("time").forEach((function(t){t.title="UTC time: "+t.innerText;var e=new Date(Date.parse(t.dateTime));t.innerText=e.toLocaleString([],{timeZoneName:"long",year:"numeric",month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"})+"."}))},ng4s:function(t,e,n){"use strict";n.r(e);n("xLls"),n("EedU"),n("tYYW")},tYYW:function(t,e,n){n("pNMO"),n("4Brf"),n("ma9I");var a=n("EVdn");n("ZeAa"),n("1yRD");var i=function(t){return console.log(t),t.loading?t.text:a('\n        <a href="https://www.wikidata.org/wiki/'.concat(t.id,'" target="_blank">').concat(t.id,"</a>:\n        <strong>").concat(t.text,"</strong> &mdash;\n        <dfn>").concat(t.description,"</dfn>\n    "))};a("select#tags").select2({multiple:!0,tags:!0,ajax:{url:"/tags.json",dataType:"json",delay:250,data:function(t){return{q:t.term,page:t.page||1}}},minimumInputLength:1}),a("select#depicts").select2({multiple:!0,ajax:{url:"/wikidata.json",dataType:"json",delay:250},templateResult:i,minimumInputLength:1}),a("select#wikidata").select2({ajax:{url:"/wikidata.json",dataType:"json",delay:250},templateResult:i,minimumInputLength:1})},xLls:function(t,e,n){}},[["ng4s","runtime",0,1]]]);