void 0===Craft.Cloner&&(Craft.Cloner={}),function($){Craft.Cloner=Garnish.Base.extend({$table:null,title:null,action:null,init:function(t){Garnish.requestAnimationFrame($.proxy((function(){this.$table=$("#"+t.id+"-vue-admin-table"),this.title="New "+t.title+" Name",this.action="cloner/"+t.action,this.$table.length||(this.$table=$("#"+t.id)),this.setupTable()}),this))},setupTable:function(){var t=this;this.$table.length&&(this.$table.find("thead tr").each((function(){var t=$(this).find("td.thin:first");if(t.length){var e=$('<td class="thin"></td>');t.before(e)}else $(this).append('<td class="thin"></td>')})),this.$table.find("tbody tr").each((function(){var e=$(this).find('td a[role="button"]').parents("td"),a=$('<a class="add icon"></a><span class="spinner cloner-spinner hidden"></span>');if(e.length){var n=$('<td class="thin"></td>').html(a);e.before(n)}else{var n=$('<td class="thin"></td>').html(a);$(this).append(n)}t.addListener(a,"click","onCloneButtonClick")})))},onCloneButtonClick:function(t){t.preventDefault();var e=$(t.currentTarget).parents("tr"),a=e.find("td:first a").attr("href");a||(a=e.find("th:first a").attr("href"));var n=a.split("?")[0].split("/"),i=n[n.length-1],r,s=$(t.currentTarget),l=$(t.currentTarget).siblings(".spinner");if(r=prompt(this.title)){var d={id:i,name:r,handle:this.generateHandle(r)};s.addClass("hidden"),l.removeClass("hidden"),Craft.sendActionRequest("POST",this.action,{data:d}).then((t=>{window.location.reload()})).catch((({response:t})=>{s.removeClass("hidden"),l.addClass("hidden"),t&&t.data&&t.data.message?Craft.cp.displayError(t.data.message):Craft.cp.displayError()}))}},generateHandle:function(t){var e;e=(e=(e=t.replace("/<(.*?)>/g","")).replace(/['"‘’“”\[\]\(\)\{\}:]/g,"")).toLowerCase(),e=(e=Craft.asciiString(e)).replace(/^[^a-z]+/,"");for(var a=Craft.filterArray(e.split(/[^a-z0-9]+/)),e="",n=0;n<a.length;n++)e+=0==n?a[n]:a[n].charAt(0).toUpperCase()+a[n].substr(1);return e}})}(jQuery);
//# sourceMappingURL=cloner.js.map