<?
$strMessPrefix = 'ACRIT_EXP_CUSTOM_XML_';

//
$MESS[$strMessPrefix.'P_DESCRIPTION'] = '
<p>
	Данный плагин позволяет сделать выгрузку товаров практически в любой XML-формат. Большое количество настроек делают выгрузку гибкой и универсальной.
</p>
<p>Примерный алгоритм настройки описан ниже.</p>
<ol>
	<li>Сначала необходимо заполнить поля с XML-структурами (не забывайте, что каждая XML-структура должна быть валидной): общая структура, структура товара и предложений, структуры категорий и валют,</li>
	<li>Затем необходимо заменяемые поля обозначить макросами:
		<ul>
			<li>
				для общей структуры макросы предопределены, например: #ITEMS# (это блок с товарами), #CATEGORIES# (категории), #CURRENCIES# (валюты), #ENCODING# (кодировка из настроек профиля), #SITE_URL# (адрес сайта из настроек профиля), #DATE# (текущая дата без времени), #DATETIME# (текущая дата со временем). Добавление своих макросов невозможно, вся информация указывается прямо в структуре,
			</li>
			<li>
				для структуры категорий и валют макросы также предопределены (для категорий: #ID#, #NAME#, #PARENT_ID#, #CODE#, #EXTERNAL_ID#, для валют: #CURRENCY#, #RATE#),
			</li>
			<li>
				для товаров и предложений предопределенные макросы общей структуры не используются. Здесь Вы сами задаете макросы (вида #MYPARAM#) и после сохранения настроек они автоматически добавляются в список настраиваемых полей. Именно этот пункт является самым важным и описан ниже.
			</li>
		</ul>
	</li>
	<li>
		Заполнив XML-структуры с указанием тегов необходимо применить изменения (кнопка «Применить» внизу формы профиля), и после этого список полей обновляется: теперь можно приступать к настройке полей. При этом, для каждого поля в его настройках можно указать произвольное название (только для Вашего удобства), роль, обязательность, множественность и др. - после изменения этих параметров для полей необходимо сохранение применение настроек профиля, чтобы они начали работать.
	</li>
	<li>
		Для каждого поля доступно указание его роли, чтобы не только выгружать из него данные, но и предварительно его обработать:
		<ul>
			<li>роль «URL» (при выгрузке URL товара) - без этой роли ссылка на страницу выгружается как «/catalog/product/», а с примененной ролью (применяется в настройках поля, кнопка «Настройки») - «http://site.ru/catalog/product/»,</li>
			<li>роль «Картинки» (при выгрузке любых картинок и файлов товара) - аналогично, добавляется адрес сайта,</li>
			<li>роль «Категория» (при выгрузке ID раздела товара) - в случае привязки товара к нескольким разделам, при необходимости, указывает не реальный ID основного раздела, а ID основого или дополнительного раздела, подлежащих выгрузке (иначе возможна выгрузка раздела, не попадающего под условия выгрузки),</li>
			<li>роль «Валюта» (при выгрузке валюты) - указание роли обязательно при необходимости выгрузки отдельного блока валют, которые выгружаются как раз на основе данной роли.</li>
		</ul>
	</li>
	
</ol>

';
$MESS[$strMessPrefix.'P_ROLES'] = '';

?>