// JavaScript Document
var cityArr = new Array();
var countryArr = new Array();
var provinceArr = ["北京市","天津市","上海市","重庆市","湖北省"];
cityArr["北京市"] = ["北京市"];
cityArr["天津市"] = ["天津市"];
cityArr["上海市"] = ["上海市"];
cityArr["重庆市"] = ["重庆市"];
cityArr["湖北省"] = ["武汉市","十堰市","襄樊市","荆门市","孝感市","黄冈市","鄂州市","黄石市","咸宁市","荆州市","宜昌市","随州市","省直辖","恩施州"];
countryArr["上海市"] = ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区?", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县", "城桥镇"];
countryArr["北京市"] = ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县", "延庆镇"];
countryArr["天津市"] = ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "蓟县", "宁河县", "芦台镇", "静海县", "静海镇"];
countryArr["重庆市"] = ["渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "万州区", "涪陵区", "黔江区", "长寿区", "合川市", "永川区市", "江津市", "南川市", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "垫江县", "武隆县", "丰都县", "城口县", "梁平县", "开县", "巫溪县", "巫山县", "奉节县", "云阳县", "忠县", "石柱土家族", "彭水苗族", "酉阳土家族", "秀山土家族"];
countryArr["武汉市"] = ["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区"];
countryArr["十堰市"] = ["张湾区", "茅箭区", "丹江口市", "郧县", "城关镇", "竹山县", "城关镇", "房县", "城关镇", "郧西县", "城关镇", "竹溪县", "城关镇"];
countryArr["襄樊市"] = ["襄城区", "樊城区", "襄阳区", "老河口市", "枣阳市", "宜城市", "南漳县", "城关镇", "谷城县", "城关镇", "保康县", "城关镇"];
countryArr["荆门市"] = ["东宝区", "掇刀区", "钟祥市", "沙洋县", "沙洋镇", "京山县", "新市镇"];
countryArr["孝感市"] = ["孝南区", "应城市", "安陆市", "汉川市", "孝昌县", "花园镇", "大悟县", "城关镇", "云梦县", "城关镇"];
countryArr["黄冈市"] = ["黄州区", "麻城市", "武穴市", "红安县", "城关镇", "罗田县", "凤山镇", "英山县", "温泉镇", "浠水县", "清泉镇", "蕲春县", "漕河镇", "黄梅县", "黄梅镇", "团风县", "团风镇"];
countryArr["鄂州市"] = ["鄂城区", "梁子湖区", "华容区"];
countryArr["黄石市"] = ["黄石港区", "西塞山区", "下陆区", "铁山区", "大冶市", "阳新县", "兴国镇"];
countryArr["咸宁市"] = ["咸安区", "赤壁市", "嘉鱼县", "鱼岳镇", "通城县", "隽水镇", "崇阳县", "天城镇", "通山县", "通羊镇"];
countryArr["荆州市"] = ["沙市区", "荆州区", "石首市", "洪湖市", "松滋市", "江陵县", "郝穴镇", "公安县", "斗湖堤镇", "监利县", "容城镇"];
countryArr["宜昌市"] = ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "枝江市", "宜都市", "当阳市", "远安县", "鸣凤镇", "兴山县", "古夫镇", "秭归县", "茅坪镇", "长阳土家族", "龙舟坪镇", "五峰土家族", "五峰镇"];
countryArr["随州市"] = ["曾都区", "广水市"];
countryArr["省直辖"] = ["仙桃市", "天门市", "潜江市", "神农架林区", "松柏镇"];
countryArr["恩施州"] = ["恩施市", "利川市", "建始县", "业州镇", "巴东县", "信陵镇", "宣恩县", "珠山镇", "咸丰县", "高乐山镇", "来凤县", "翔凤镇", "鹤峰县", "容美镇"];
var province = document.getElementById('province');
var city = document.getElementById('city');
var country = document.getElementById('country');
for (var i in provinceArr)
	{
		province.add(new Option(provinceArr[i],provinceArr[i]));
	}
function wong(obj,data)
{
	for (var i in data)
	{
		var op = new Option(data[i],data[i]);
		obj.add(op);
	}
}
city.onchange = function(){
	country.length = 0;
	wong(country,countryArr[city.value]);
}
province.onchange = function()
{
	city.length = 0;
	wong(city,cityArr[province.value]);
	city.onchange();
}