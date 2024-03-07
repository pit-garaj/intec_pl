{"version":3,"sources":["calendar-settings-slider.js"],"names":["window","SettingsSlider","params","this","calendar","id","uid","Math","round","random","zIndex","sliderId","inPersonal","util","userIsOwner","showGeneralSettings","config","perm","access","settings","DOM","SLIDER_WIDTH","SLIDER_DURATION","prototype","show","doBxContextFix","BX","SidePanel","Instance","open","contentCallback","createContent","bind","width","animationDuration","events","onClose","proxy","hide","onCloseComplete","destroy","onLoad","onLoadSlider","disableKeyHandler","isOpenedState","close","isOpened","event","getSliderPage","getUrl","denyClose","denyAction","removeCustomEvent","enableKeyHandler","restoreBxContextFix","slider","Promise","resolve","top","ajax","runAction","data","isPersonal","then","response","html","getData","set","additionalParams","mailboxList","getSlider","content","layout","get","initControls","save","buttonsWrap","querySelector","ZIndexManager","register","denyBusyInvitation","showWeekNumbers","sectionSelect","crmSelect","showDeclined","showTasks","syncTasks","showCompletedTasks","timezoneSelect","syncPeriodPast","syncPeriodFuture","sendFromEmailSelect","Type","isElementNode","emailSelectorControl","Calendar","Controls","EmailSelectorControl","selectNode","allowAddNewEmail","emailHelpIcon","Helper","Event","UI","Hint","initNode","setValue","getUserOption","emailWrap","Util","isEventWithEmailGuestAllowed","Dom","removeClass","disabled","addClass","parentNode","InfoHelper","workTimeStart","workTimeEnd","weekHolidays","yearHolidays","yearWorkdays","typeAccess","TYPE_ACCESS","accessWrap","initAccessController","code","hasOwnProperty","insertAccessRow","getAccessName","options","length","sections","sectionManager","getSectionListForEdit","meetSection","parseInt","crmSection","section","selected","i","belongsToOwner","add","Option","name","checked","showWeekNumber","value","work_time_start","work_time_end","in_array","week_holidays","year_holidays","year_workdays","userSettings","userTimezoneName","sendFromEmail","getValue","action","user_settings","user_timezone_name","push","type_access","request","type","handler","delegate","reload","accessControls","accessTasks","getTypeAccessTasks","accessLink","hasClass","Access","Init","accessWrapInner","appendChild","create","props","className","accessTable","accessButtonWrap","accessButton","message","ShowForm","callback","provider","GetProviderName","e","target","findTargetNode","srcElement","outerWrap","getAttribute","showAccessSelectorPopup","node","removeIcon","setValueCallback","valueNode","innerHTML","htmlspecialchars","title","cleanNode","rowNode","undefined","getDefaultTypeAccessTask","adjust","insertRow","titleNode","insertCell","valueCell","attrs","data-bx-calendar-access-selector","text","data-bx-calendar-access-remove","accessPopupMenu","popupWindow","isShown","menuId","taskId","_this","menuItems","onclick","PopupMenu","closeByEsc","autoHide","offsetTop","offsetLeft","angle","addCustomEvent","BXEventCalendar"],"mappings":"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","file":"calendar-settings-slider.map.js"}