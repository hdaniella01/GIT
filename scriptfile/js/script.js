$("#js").click(function () {
    $("#java").toggle()
    $("#csswrd").hide()
    $("#htmlwrd").hide()
    $("#variwrd").hide()
    $("#oprawrd").hide()
    $("#jsr").addClass("new")
    $("#cssr").removeClass("new")

})

$("#css").click(function () {
    $("#csswrd").toggle()
    $("#cssr").addClass("new")
    $("#jsr").removeClass("new")
    $("#java").hide()
    $("#htmlwrd").hide()
    $("#variwrd").hide()
    $("#oprawrd").hide()

})

$("#html").click(function () {
    $("#htmlwrd").toggle()
    $("#htmlr").addClass("new")
    $("#cssr").removeClass("new")
    $("#java").hide()
    $("#csswrd").hide()
    $("#variwrd").hide()
    $("#oprawrd").hide()

})

$("#vari").click(function () {
    $("#variwrd").toggle()
    $("#varir").addClass("new")
    $("#htmlr").removeClass("new")
    $("#java").hide()
    $("#csswrd").hide()
    $("#htmlwrd").hide()
    $("#oprawrd").hide()

})

$("#opra").click(function () {
    $("#oprawrd").toggle()
    $("#oprar").addClass("new")
    $("#varir").removeClass("new")
    $("#c++r").removeClass("new")
    $("#varir").removeClass("new")
    $("#htmlr").removeClass("new")
    $("#cssr").removeClass("new")
    $("#jsr").removeClass("new")
    $("#java").hide()
    $("#csswrd").hide()
    $("#htmlwrd").hide()
    $("#variwrd").hide()

})

$("#c++").click(function () {
    $("#c++wrd").toggle()
    $("#c++r").addClass("new")
    $("#oprar").removeClass("new")
    $("#varir").removeClass("new")
    $("#htmlr").removeClass("new")
    $("#cssr").removeClass("new")
    $("#jsr").removeClass("new")
    $("#java").hide()
    $("#csswrd").hide()
    $("#htmlwrd").hide()
    $("#variwrd").hide()
    $("#oprawrdwrd").hide()

})