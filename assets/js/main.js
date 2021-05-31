import { ButtonTool, checkTool, txtBoxTool, scrollTool, progressBar, radioTool, switchTool } from './mytoolkit.js';

var toolKit = (function () {
    var tools = function () {
        var draw = SVG().addTo('body').size('100%', '40');
        var group = draw.group();
        var btn = group.rect(100, 30).fill('#427bf5').radius('4').opacity('90%')
        var text_btn = group.text("Button").move(10, 10);
        text_btn.click(function () {
            var btn = new ButtonTool.Button;
            btn.move(10, 20);
            btn.onclick(function (e) {
                console.log("Button is pressed");
            });
        })
        var chk = draw.rect(100, 30).fill('#427bf5').radius('2').opacity('85%').move(100, 0)
        var text_chk = draw.text("Check").move(120, 10);
        text_chk.click(function () {
            var check = new checkTool.check;
            check.move(10, 10)
        })
        var rad = draw.rect(100, 30).fill('#427bf5').radius('2').opacity('80%').move(200, 0)
        var text_rad = draw.text("Radio").move(220, 10);
        text_rad.click(function () {
            var radiobtn = new radioTool.radio;
            radiobtn.move(10, 10)
        })
        var tbx = draw.rect(100, 30).fill('#427bf5').radius('2').opacity('75%').move(300, 0)
        var text_tbx = draw.text("TextBox").move(320, 10);
        text_tbx.click(function () {
            var txtbox = new txtBoxTool.txtBox;
            txtbox.text("Text");
            txtbox.move(8, 8)
        })
        var sbar = draw.rect(100, 30).fill('#427bf5').radius('2').opacity('70%').move(400, 0)
        var text_sbar = draw.text("Scroll").move(420, 10);
        text_sbar.click(function () {
            var scroll = new scrollTool.scrollbar;
            scroll.move(10, 10)
        })
        var prog = draw.rect(100, 30).fill('#427bf5').radius('2').opacity('65%').move(500, 0)
        var text_prog = draw.text("Progress").move(520, 10);
        text_prog.click(function () {
            var progBar = new progressBar.progBar;
            progBar.move(8, 8)
        })
        var swt = draw.rect(100, 30).fill('#427bf5').radius('2').opacity('60%').move(600, 0)
        var text_swt = draw.text("Switch").move(620, 10);
        text_swt.click(function () {
            var swtch = new switchTool.switchbar;
        })
        var clr = draw.rect(80, 30).fill('#427bf5').radius('2').opacity('55%').move(700, 0)
        var text_clr = draw.text("Clear All").move(700, 10);
        text_clr.click(function () {
            location.reload();
        })
        var clickEvent = null
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
    }

    return { tools }

}()

);




var t = new toolKit.tools;












