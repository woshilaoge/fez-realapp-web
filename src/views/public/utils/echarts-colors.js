/**
 * Created by xulongfei1 on 2017/3/13.
 */

const PIE = ['#FEBE8A',  '#64D2D4', '#6759E0', '#7CC0EF','#D5DF37', '#46BECC', '#72D1ED', '#9482FA', '#AB6FB5', '#FD518A'];

const BAR = ['#7CC0EF', '#64D2D4', '#6759E0', '#FEBE8A', '#9482FA'];

const LINE = ['#FEBE8A', '#7CC0EF', '#64D2D4', '#FD7E95', '#6759E0','#AB6FB5', '#72D1ED', '#9482FA', '#FD518A', '#46BECC'];

const AREA = [
    //#FEBE8A
    [{
        offset: 0,
        color: 'rgba(254,190,138,1)'
    }, {
        offset: 0.5,
        color: 'rgba(254,190,138,0.2)'
    },{
        offset: 1,
        color: 'rgba(254,190,138,0)'
    }],
    //#7CC0EF
    [{
        offset: 0,
        color: 'rgba(124,192,239,1)'
    }, {
        offset: 0.5,
        color: 'rgba(124,192,239,0.2)'
    },{
        offset: 1,
        color: 'rgba(124,192,239,0)'
    }],
    //#64D2D4
    [{
        offset: 0,
       color: 'rgba(100,210,212,1)'
    },{
        offset: 0.5,
       color: 'rgba(100,210,212,0.2)'
    },{
        offset: 1,
       color: 'rgba(100,210,212,0)'
    }],
     //#FD7E95
    [{
        offset: 0,
        color: 'rgba(253,126,149,1)'
    }, {
        offset: 0.5,
        color: 'rgba(253,126,149,0.2)'
    },{
        offset: 1,
        color: 'rgba(253,126,149,0)'
    }],
    //#6759E0
   [{
        offset: 0,
       color: 'rgba(103,89,224,1)'
    },{
        offset: 0.5,
       color: 'rgba(103,89,224,0.2)'
    },{
        offset: 1,
       color: 'rgba(103,89,224,0)'
    }],
    //#AB6FB5
    [{
        offset: 0,
       color: 'rgba(171,111,181,1)'
    },{
        offset: 0.5,
       color: 'rgba(171,111,181,0.2)'
    },{
        offset: 1,
       color: 'rgba(171,111,181,0)'
    }],
    [{
        offset: 0,
        color: '#FEBE8A'
    }, {
        offset: 1,
        color: 'blue'
    }],
    [{
        offset: 0,
        color: '#FEBE8A'
    }, {
        offset: 1,
        color: 'blue'
    }],
    [{
        offset: 0,
        color: '#FEBE8A'
    }, {
        offset: 1,
        color: 'blue'
    }]
];

export {
    PIE,
    BAR,
    LINE,
    AREA
}
