{"version":3,"file":"registry.bundle.map.js","names":["this","BX","Messenger","v2","Component","exports","ui_entitySelector","im_v2_application_core","im_v2_provider_service","im_v2_component_search_searchResult","main_popup","im_v2_component_elements","main_core_events","im_public","im_v2_const","im_v2_component_search_chatSearchInput","im_v2_component_search_searchExperimental","searchConfig","currentUser","chats","network","AddToChatContent","name","components","SearchResult","MessengerButton","Button","ScrollWithGradient","props","chatId","type","Number","required","dialogId","String","data","searchQuery","showHistory","isLoading","selectedItems","Set","needTopShadow","needBottomShadow","computed","ButtonSize","ButtonColor","dialog","$store","getters","isChat","ChatType","user","created","chatService","ChatService","membersSelector","getTagSelector","mounted","renderTo","$refs","focusTextBox","methods","timeoutId","TagSelector","maxHeight","showAddButton","showTextBox","addButtonCaption","$Bitrix","Loc","getMessage","addButtonCaptionMore","showCreateButton","events","onBeforeTagAdd","clearTimeout","onAfterTagAdd","event","tag","getData","itemUniqId","entityId","id","add","focusSelector","onBeforeTagRemove","onAfterTagRemove","delete","onInput","getTextBoxValue","onBlur","inputText","length","setTimeout","hideTextBox","onContainerClick","hideAddButton","prepareMembers","members","preparedMembers","forEach","item","split","SearchEntityIdTypes","bot","push","department","onSelectItem","selectedItem","selectedStatus","nativeEvent","addTag","getId","getEntityId","entityType","getEntityType","title","getTitle","avatar","getAvatar","removeTag","clearTextBox","altKey","onInviteClick","extendChat","Core","getUserId","createChat","addToChat","then","$emit","catch","error","console","description","ownerId","isPrivate","newDialogId","openChat","onListScroll","target","scrollTop","clientHeight","scrollHeight","template","POPUP_ID","AddToChat","MessengerPopup","showPopup","Boolean","bindElement","Object","popupConfig","emits","config","titleBar","closeIcon","offsetTop","offsetLeft","padding","contentPadding","contentBackground","className","ForwardContent","SearchExperimental","ChatSearchInput","messageId","onLoading","value","onUpdateSearch","query","async","EventEmitter","emit","EventType","textarea","insertForward","POPUP_ID$1","ForwardPopup","targetContainer","document","body","fixed","draggable","autoHide","EntitySelector","UI","Application","Provider","Service","Main","Elements","Event","Lib","Const"],"sources":["registry.bundle.js"],"mappings":"AACAA,KAAKC,GAAKD,KAAKC,IAAM,CAAC,EACtBD,KAAKC,GAAGC,UAAYF,KAAKC,GAAGC,WAAa,CAAC,EAC1CF,KAAKC,GAAGC,UAAUC,GAAKH,KAAKC,GAAGC,UAAUC,IAAM,CAAC,EAChDH,KAAKC,GAAGC,UAAUC,GAAGC,UAAYJ,KAAKC,GAAGC,UAAUC,GAAGC,WAAa,CAAC,GACnE,SAAUC,EAAQC,EAAkBC,EAAuBC,EAAuBC,EAAoCC,EAAWC,EAAyBC,EAAiBC,EAAUC,EAAYC,EAAuCC,GACxO,aAEA,MAAMC,EAAe,CACnBC,YAAa,MACbC,MAAO,MACPC,QAAS,OAIX,MAAMC,EAAmB,CACvBC,KAAM,mBACNC,WAAY,CACVC,aAAcf,EAAoCe,aAClDC,gBAAiBd,EAAyBe,OAC1CC,mBAAoBhB,EAAyBgB,oBAE/CC,MAAO,CACLC,OAAQ,CACNC,KAAMC,OACNC,SAAU,MAEZC,SAAU,CACRH,KAAMI,OACNF,SAAU,OAGdG,OACE,MAAO,CACLC,YAAa,GACbC,YAAa,KACbC,UAAW,MACXC,cAAe,IAAIC,IACnBC,cAAe,MACfC,iBAAkB,KAEtB,EACAC,SAAU,CACRC,WAAY,IAAMjC,EAAyBiC,WAC3CC,YAAa,IAAMlC,EAAyBkC,YAC5C5B,aAAc,IAAMA,EACpB6B,SACE,OAAO9C,KAAK+C,OAAOC,QAAQ,aAAahD,KAAKiC,SAAU,KACzD,EACAgB,SACE,OAAOjD,KAAK8C,OAAOhB,OAAShB,EAAYoC,SAASC,IACnD,GAEFC,UACEpD,KAAKqD,YAAc,IAAI7C,EAAuB8C,YAC9CtD,KAAKuD,gBAAkBvD,KAAKwD,gBAC9B,EACAC,UACEzD,KAAKuD,gBAAgBG,SAAS1D,KAAK2D,MAAM,iBACzC3D,KAAKuD,gBAAgBK,cACvB,EACAC,QAAS,CACPL,iBACE,IAAIM,EAAY,KAChB,OAAO,IAAIxD,EAAkByD,YAAY,CACvCC,UAAW,IACXC,cAAe,MACfC,YAAa,KACbC,iBAAkBnE,KAAKoE,QAAQC,IAAIC,WAAW,sCAC9CC,qBAAsBvE,KAAKoE,QAAQC,IAAIC,WAAW,2CAClDE,iBAAkB,MAClBC,OAAQ,CACNC,eAAgB,KACdC,aAAab,EAAU,EAEzBc,cAAeC,IACb,MAAMC,IACJA,GACED,EAAME,UACV,MAAMC,EAAa,GAAGF,EAAIG,YAAYH,EAAII,KAC1ClF,KAAKuC,cAAc4C,IAAIH,GACvBhF,KAAKoF,eAAe,EAEtBC,kBAAmB,KACjBV,aAAab,EAAU,EAEzBwB,iBAAkBT,IAChB,MAAMC,IACJA,GACED,EAAME,UACV,MAAMC,EAAa,GAAGF,EAAIG,YAAYH,EAAII,KAC1ClF,KAAKuC,cAAcgD,OAAOP,GAC1BhF,KAAKoF,eAAe,EAEtBI,QAAS,KACPxF,KAAKoC,YAAcpC,KAAKuD,gBAAgBkC,iBAAiB,EAE3DC,OAAQb,IACN,MAAMc,EAAY3F,KAAKuD,gBAAgBkC,kBACvC,GAAIE,EAAUC,OAAS,EAAG,CACxB,MACF,CACA9B,EAAY+B,YAAW,KACrB7F,KAAKuD,gBAAgBuC,cACrB9F,KAAKuD,gBAAgBU,eAAe,GACnC,IAAI,EAET8B,iBAAkB,KAChB/F,KAAKoF,eAAe,IAI5B,EACAA,gBACEpF,KAAKuD,gBAAgByC,gBACrBhG,KAAKuD,gBAAgBW,cACrBlE,KAAKuD,gBAAgBK,cACvB,EACAqC,eAAeC,GACb,MAAMC,EAAkB,GACxB,IAAID,GAASE,SAAQC,IACnB,MAAOvE,EAAMoD,GAAMmB,EAAKC,MAAM,KAC9B,GAAIxE,IAAShB,EAAYyF,oBAAoBpD,MAAQrB,IAAShB,EAAYyF,oBAAoBC,IAAK,CACjGL,EAAgBM,KAAKvB,EACvB,MAAO,GAAIpD,IAAShB,EAAYyF,oBAAoBG,WAAY,CAC9DP,EAAgBM,KAAK,GAAG3E,IAAOoD,IACjC,KAEF,OAAOiB,CACT,EACAQ,aAAa9B,GACX,MAAM+B,aACJA,EAAYC,eACZA,EAAcC,YACdA,GACEjC,EACJ,GAAIgC,EAAgB,CAClB7G,KAAKuD,gBAAgBwD,OAAO,CAC1B7B,GAAI0B,EAAaI,QACjB/B,SAAU2B,EAAaK,cACvBC,WAAYN,EAAaO,gBACzBC,MAAOR,EAAaS,WACpBC,OAAQV,EAAaW,aAEzB,KAAO,CACLvH,KAAKuD,gBAAgBiE,UAAU,CAC7BtC,GAAI0B,EAAaI,QACjB/B,SAAU2B,EAAaK,eAE3B,CACAjH,KAAKuD,gBAAgBkE,eACrB,IAAKX,EAAYY,OAAQ,CACvB1H,KAAKoC,YAAc,EACrB,CACF,EACAuF,gBACE,MAAMzB,EAAUlG,KAAKiG,eAAejG,KAAKuC,eACzC,GAAIvC,KAAKiD,OAAQ,CACfjD,KAAK4H,WAAW1B,EAClB,KAAO,CACLA,EAAQO,KAAKzG,KAAKiC,SAAU1B,EAAuBsH,KAAKC,aACxD9H,KAAK+H,WAAW7B,EAClB,CACF,EACA0B,WAAW1B,GACTlG,KAAKsC,UAAY,KACjBtC,KAAKqD,YAAY2E,UAAU,CACzBnG,OAAQ7B,KAAK6B,OACbqE,UACA7D,YAAarC,KAAKqC,cACjB4F,MAAK,KACNjI,KAAKsC,UAAY,MACjBtC,KAAKkI,MAAM,QAAQ,IAClBC,OAAMC,IACPC,QAAQD,MAAMA,GACdpI,KAAKsC,UAAY,MACjBtC,KAAKkI,MAAM,QAAQ,GAEvB,EACAH,WAAW7B,GACTlG,KAAKsC,UAAY,KACjBtC,KAAKqD,YAAY0E,WAAW,CAC1BX,MAAO,KACPkB,YAAa,KACbpC,UACAqC,QAAShI,EAAuBsH,KAAKC,YACrCU,UAAW,OACVP,MAAKQ,IACNzI,KAAKsC,UAAY,MACjBzB,EAAUX,UAAUwI,SAASD,EAAY,IACxCN,OAAMC,IACPC,QAAQD,MAAMA,GACdpI,KAAKsC,UAAY,KAAK,GAE1B,EACAqG,aAAa9D,GACX7E,KAAK0C,iBAAmBmC,EAAM+D,OAAOC,UAAYhE,EAAM+D,OAAOE,eAAiBjE,EAAM+D,OAAOG,aAC5F,GAAIlE,EAAM+D,OAAOC,YAAc,EAAG,CAChC7I,KAAKyC,cAAgB,MACrB,MACF,CACAzC,KAAKyC,cAAgB,IACvB,GAEFuG,SAAU,yuDA4CZ,MAAMC,EAAW,uBAGjB,MAAMC,EAAY,CAChB5H,KAAM,YACNC,WAAY,CACV4H,eAAgBxI,EAAyBwI,eACzC9H,oBAEFO,MAAO,CACLwH,UAAW,CACTtH,KAAMuH,QACNrH,SAAU,MAEZsH,YAAa,CACXxH,KAAMyH,OACNvH,SAAU,MAEZH,OAAQ,CACNC,KAAMC,OACNC,SAAU,MAEZC,SAAU,CACRH,KAAMI,OACNF,SAAU,MAEZwH,YAAa,CACX1H,KAAMyH,OACNvH,SAAU,OAGdyH,MAAO,CAAC,SACR9G,SAAU,CACRsG,SAAU,IAAMA,EAChBS,SACE,MAAO,CACLC,SAAU3J,KAAKoE,QAAQC,IAAIC,WAAW,uDACtCsF,UAAW,KACXN,YAAatJ,KAAKsJ,YAClBO,UAAW7J,KAAKwJ,YAAYK,UAC5BC,WAAY9J,KAAKwJ,YAAYM,WAC7BC,QAAS,EACTC,eAAgB,EAChBC,kBAAmB,OACnBC,UAAW,2CAEf,GAEFlB,SAAU,2SAcZ,MAAMmB,EAAiB,CACrB7I,KAAM,iBACNC,WAAY,CACV6I,mBAAoBpJ,EAA0CoJ,mBAC9DC,gBAAiBtJ,EAAuCsJ,iBAE1DzI,MAAO,CACL0I,UAAW,CACTxI,KAAM,CAACC,OAAQG,QACfF,SAAU,OAGdyH,MAAO,CAAC,SACRtH,OACE,MAAO,CACLC,YAAa,GACbE,UAAW,MAEf,EACAuB,QAAS,CACP0G,UAAUC,GACRxK,KAAKsC,UAAYkI,CACnB,EACAC,eAAeC,GACb1K,KAAKoC,YAAcsI,CACrB,EACAC,mBAAmB9F,GACjB,MAAM5C,SACJA,GACE4C,QACEhE,EAAUX,UAAUwI,SAASzG,GACnCrB,EAAiBgK,aAAaC,KAAK/J,EAAYgK,UAAUC,SAASC,cAAe,CAC/EV,UAAWtK,KAAKsK,YAElBtK,KAAKkI,MAAM,QACb,GAEFc,SAAU,2tBA0BZ,MAAMiC,EAAa,mBAGnB,MAAMC,EAAe,CACnB5J,KAAM,eACNC,WAAY,CACV4H,eAAgBxI,EAAyBwI,eACzCgB,kBAEFvI,MAAO,CACLwH,UAAW,CACTtH,KAAMuH,QACNrH,SAAU,MAEZsI,UAAW,CACTxI,KAAM,CAACC,OAAQG,QACfF,SAAU,OAGdyH,MAAO,CAAC,SACR9G,SAAU,CACRsG,SAAU,IAAMgC,EAChBvB,SACE,MAAO,CACLC,SAAU3J,KAAKoE,QAAQC,IAAIC,WAAW,gDACtCsF,UAAW,KACXuB,gBAAiBC,SAASC,KAC1BC,MAAO,KACPC,UAAW,KACXxB,QAAS,EACTyB,SAAU,MACVxB,eAAgB,EAChBC,kBAAmB,OACnBC,UAAW,uCAEf,GAEFlB,SAAU,yOAYZ3I,EAAQ6I,UAAYA,EACpB7I,EAAQ6K,aAAeA,CAExB,EApaA,CAoaGlL,KAAKC,GAAGC,UAAUC,GAAGC,UAAUqL,eAAiBzL,KAAKC,GAAGC,UAAUC,GAAGC,UAAUqL,gBAAkB,CAAC,EAAGxL,GAAGyL,GAAGD,eAAexL,GAAGC,UAAUC,GAAGwL,YAAY1L,GAAGC,UAAUC,GAAGyL,SAASC,QAAQ5L,GAAGC,UAAUC,GAAGC,UAAUH,GAAG6L,KAAK7L,GAAGC,UAAUC,GAAGC,UAAU2L,SAAS9L,GAAG+L,MAAM/L,GAAGC,UAAUC,GAAG8L,IAAIhM,GAAGC,UAAUC,GAAG+L,MAAMjM,GAAGC,UAAUC,GAAGC,UAAUH,GAAGC,UAAUC,GAAGC"}