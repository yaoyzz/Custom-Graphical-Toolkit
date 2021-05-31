
/**
 * Button
 */
var ButtonTool = (function () {
    var Button = function () {
        var draw = SVG().addTo('body').size('25%', '70');
        var group = draw.group();
        var rect = group.rect(100, 30).fill('#427bf5').radius('10').opacity('60%')
        var text = group.text("Click Me").move(10, 5);
        var clickEvent = null
        rect.mouseover(function () {
            this.fill({ color: '#9898fa' }).radius('16')
            onhover();
        })
        rect.mouseout(function () {

            this.fill({ color: '#0250f7' }).radius('10');
        })
        rect.mouseup(function () {
            this.fill({ color: '#008bb5' })
        })
        rect.click(function (event) {
            this.stroke({ color: 'grey', width: '3', opacity: '0.5' })
            text.text('Clicked')
            if (clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function (x, y) {
                group.move(x, y);
            },
            onclick: function (eventHandler) {
                clickEvent = eventHandler
            },
            text: function (t) {
                text.text(t);
            },
        }
        function onhover() {
            console.log("Hovered on Button")
        } 
       }
    return { Button }
}()
);

/**
 * Check Box
 */
var checkTool = (function () {
    var check = function () {
        var draw = SVG().addTo('body').size('350', '100');
        var group = draw.group();
        var rect = group.rect(40, 40).fill('#f2f8fa').opacity('80%').radius('3').stroke({ color: 'black' });
        var poly = group.polygon('45,23 52,42 80,30 48,50   ').fill('none').stroke('0');
        var t1 = group.text("Click to toggle to check state ").move(50, 17)
        poly.move(4, 8);
        var linear = draw.gradient('linear', function (add) {
            add.stop(0, '#426ff5')
            add.stop(1, '#3c1cbd')
        })
        var checked = false;
        var clickEvent = null;
        rect.mouseover(function () {
            rect.fill('#8ab7e3')
            console.log('Hoverd on Checkbox')
        })
        rect.mouseout(function () {
            this.fill({ color: '#f2f8fa' })
        })
        rect.click(function (event) {
            console.log('Clicked Check button')
            this.stroke({ color: 'grey', width: '3', opacity: '0.5' })
            if (checked != true) {
                poly.fill(linear);
                checked = true;
            }
            else {
                poly.fill('none')
                checked = false;
            }
            if (clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function (x, y) {
                group.move(x, y);
            },

            onclick: function (eventHandler) {
                clickEvent = eventHandler
            },

        }
    }
    return { check }

}()
);

/**
 * Text Box
 */
var txtBoxTool = (function () {
    var txtBox = function () {
        var draw = SVG().addTo('body').size('25%', '100');
        var group = draw.group();
        var rect = group.rect(150, 35).fill('white').radius('6').opacity('60%').stroke({ color: 'blue', width: '1' })
        var text = group.text("").move(5, 4);
        var caret = group.line(45, 2.5, 45, 25).stroke({ width: 1, color: "none" }).move(67.7, 5);
        var clickEvent = null
        rect.mouseover(function () {
            this.fill({ color: '#9898fa' })
            caret.stroke({ color: 'black', width: '1.2' })
            onhover();
        })
        rect.mouseout(function () {
            this.fill({ color: 'white' })
            caret.stroke({ color: "none" })
        })
        rect.click(function (event) {
            console.log('Textbox Clicked')
            this.stroke({ color: 'grey', width: '3', opacity: '0.5' })
            if (clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function (x, y) {
                group.move(x, y);
            },

            onclick: function (eventHandler) {
                clickEvent = eventHandler
            },

            text: function (t) {
                console.log("Text added to textbox")
                text.text(t);
            },

        }
        function onhover() {
            console.log("Hovered on Textbox")
        }

    }
    return { txtBox }

}()
);

/**
 * Scroll Bar
 */
var scrollTool = (function () {
    var scrollbar = function () {
        var leap = 20;
        var barlength = 200;
        var start = 40;
        var draw = SVG().addTo('body').size('400', '80');
        var linear = draw.gradient('linear', function (add) {
            add.stop(0, '#426ff5')
            add.stop(1, '#3c1cbd')
        })
        var group = draw.group();
        var leftrect = group.rect(30, 30).fill('grey').move(10, 10);

        var rect = group.rect(200, 30).fill('#8ab7e3').opacity('60%').move(40, 10)
        var subrect = group.rect(40, 30).fill(linear).move(start, 10).radius('3')
        var rightrect = group.rect(30, 30).fill('grey').move(240, 10)
        var clickEvent = null

        rect.mouseover(function () {
            this.fill({ color: '#9898fa' })
            onhover();
        })

        rect.mouseout(function () {
            this.fill({ color: '#8ab7e3' })
        })

        leftrect.click(function (event) {
            if (start > 40) {
                start = start - leap;
                subrect.move(start, 10)
                console.log('scrolled to left, cursor at position x:' + start + ' y:10')
            }
        })

        rightrect.click(function (event) {

            if (start < barlength) {
                start = start + leap;
                subrect.move(start, 10)
                console.log('scrolled to right, cursor at position x:' + start + ' y:10')
            }
        })
        rect.click(function (event) {
            this.stroke({ color: 'grey', width: '3', opacity: '0.5' })
            if (clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function (x, y) {
                group.move(x, y);
            },

            onclick: function (eventHandler) {
                clickEvent = eventHandler
            },

        }
        function onhover() {
            console.log("Hovered on Scrollbar")
        }

    }
    return { scrollbar }

}()
);

/**
 * Progress Bar
 */
var progressBar = (function () {
    var progBar = function () {
        var leap = 10;
        var leapLimit = 100;
        var progwidth = 10;
        var draw = SVG().addTo('body').size('25%', '100');
        var group = draw.group();
        var rect = group.rect(300, 30).fill('#8da3c4').opacity('60%').radius('6px')
        var linear = draw.gradient('linear', function (add) {
            add.stop(0, '#426ff5')
            add.stop(1, '#3c1cbd')
        })
        var subrect = group.rect(progwidth * 3, 30).fill(linear).radius('6px')
        var rtext = group.text("Click me to load").move(100, 4).fill('white').opacity('70%');
        var clickEvent = null

        rect.mouseover(function () {
            this.fill({ color: '#9898fa' })
            onhover();
        })

        rect.mouseout(function () {
            this.fill({ color: 'grey' })
        })

        group.click(function (event) {
            rect.stroke({ color: 'grey', width: '3', opacity: '0.5' })
            if (progwidth < 100) {

                console.log(progwidth)
                progwidth = progwidth + leap;
                subrect.width(progwidth * 3);

                rtext.text(progwidth + "%").move(140, 8)
            }
            if (clickEvent != null)
                clickEvent(event)
        })

        return {
            move: function (x, y) {
                group.move(x, y);
            },

            onclick: function (eventHandler) {
                clickEvent = eventHandler
            },
            text: function (t) {
                text.text(t);
            },

        }

        function onhover() {
            console.log("Hovered on Progress Bar")
        }

    }
    return { progBar }

}()
);

/**
 * Radio Button
 */
var radioTool = (function () {

    var radio = function () {
        var state1 = false;
        var state2 = false;
        var draw = SVG().addTo('body').size('25%', '150');
        var linear = draw.gradient('linear', function (add) {
            add.stop(0, '#426ff5')
            add.stop(1, '#3c1cbd')
        })
        var radio1 = draw.group()
        var outerCircle = radio1.circle(100).fill('white').opacity('60%').radius('14').stroke({ color: 'blue', width: '5px' })
        var text = radio1.text("Radio Button for state One").move(80, 40);

        var radio2 = draw.group();
        var outerCircle2 = radio2.circle(100).fill('white').opacity('60%').radius('14').stroke({ color: 'blue', width: '5px' }).move(35, 80)
        var text2 = radio2.text("Or Radio button for state Two").move(80, 85);
        var inCircle = radio1.circle(100).fill(linear).opacity('90%').radius('0')
        var inCircle2 = radio2.circle(100).fill(linear).opacity('90%').radius('0').move(48, 94)

        var clickEvent = null
        radio1.click(function () {
            if (state1 == false) {
                setState('1');
            }
            console.log('Checked 1')
        })

        radio2.click(function () {
            console.log('Checked 2')
            if (state2 == false) {
                setState('2');
            }
        })

        return {
            move: function (x, y) {
                rect.move(x, y);
            },

            onclick: function (eventHandler) {
                clickEvent = eventHandler
            },
            text: function (t) {
                text.text(t);
            },


        }


        function setState(x) {
            if (x == '1') {
                inCircle.radius('6');
                inCircle2.radius('0')
            }
            else if (x == '2') {
                inCircle.radius('0');
                inCircle2.radius('6')
            }
        }
    }

    return { radio }

}()
);

/**
 * Switch
 */
var switchTool = (function () {
    var switchbar = function () {
        var draw = SVG().addTo('body').size('25%', '100');
        var group = draw.group();
        var linear = draw.gradient('linear', function (add) {
            add.stop(0, '#426ff5')
            add.stop(1, '#3c1cbd')
        })
        var rect = group.rect(90, 35).fill('white').opacity('60%').radius('20').stroke({ color: 'blue', width: '1' });
        var circ = group.circle(100).fill('white').radius(19).move(1, 0).stroke({ color: 'blue' })
        var poly = group.polygon('45,24 52,42 78,30 49,47   ').fill('none').stroke('0');
        poly.move(60, 8);
        var checked = false;
        var clickEvent = null;
        group.click(function () {
            if (checked != true) {
                circ.animate({
                    duration: 100,
                    delay: 100,
                    when: 'now',
                    wait: 2
                }).move(57, 0);
                circ.fill(linear);
                poly.fill('white')
                checked = true;
            }
            else {
                circ.animate({
                    duration: 200,
                    delay: 500,
                    when: 'now',
                    wait: 5
                }).move(0, 0);

                circ.fill('white');
                poly.fill('none')
                checked = false;
            }
        })
        rect.click(function (event) {

            if (clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function (x, y) {
                group.move(x, y);
            },

            onclick: function (eventHandler) {
                clickEvent = eventHandler
            },

        }
    }

    return { switchbar }

}()

);

export { ButtonTool, checkTool, txtBoxTool, scrollTool, progressBar, radioTool, switchTool }