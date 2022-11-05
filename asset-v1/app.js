/* 0.5.1 2020-12-04 18:40:10 */
var app = new function() {
    this.name = "Alpha", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 6857, this.bpm = 140, this.totalframe = 328, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !2, this.bonusendloopA = !2, this.recmaxloop = 27, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0a1d1e", this.col0 = "#779295", this.col1 = "#5f7e7b", this.col2 = "#476761", this.col3 = "#304d47", this.col4 = "#1b312f", this.animearray = [{
        name: "1_lead",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "2_deux",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "3_kosh",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "4_shpok",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "5_tom",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "6_nouana",
        color: "5f7e7b",
        uniqsnd: !1
    }, {
        name: "7_scratch",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "8_trill",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "9_bass",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "10_uh",
        color: "5f7e7b",
        uniqsnd: !1
    }, {
        name: "11_nugu",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "12_guit",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "13_tromp",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "14_pouin",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "15_tung",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "16_aoun",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "17_hum",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "18_get",
        color: "5f7e7b",
        uniqsnd: !0
    }, {
        name: "19_tellme",
        color: "5f7e7b",
        uniqsnd: !1
    }, {
        name: "20_make",
        color: "5f7e7b",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "The Choir",
        src: "v1-b1-choir-hb.mp4",
        code: "1,5,6,11,19",
        sound: "bonus-choir",
        aspire: "aspire"
    }, {
        name: "The Sailor",
        src: "v1-b2-sailor-hb.mp4",
        code: "2,3,4,8,16",
        sound: "bonus-sailor",
        aspire: "aspire-sailor"
    }, {
        name: "Santa",
        src: "v1-b3-santa-hb.mp4",
        code: "4,9,10,12,17",
        sound: "bonus-santa",
        aspire: "aspire-santa"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};