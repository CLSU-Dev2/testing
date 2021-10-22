$(document).ready(function() {

    function isEmail(data) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
        return regex.test(data)
    }

    function isName(data) {
        var regex = /^[A-Za-z .]+$/
        return regex.test(data)
    }

    
    function isWebsite(data) {
        var regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        return regex.test(data)
    }

    
    function isContact(data) {
        var regex = /^\d+$/
        return regex.test(data)
    }


    
    $("form").submit(function(event) {

        event.preventDefault()


        let fnameParent = $("#getFirstname")
        let fname = $("#getFirstname").val()
        fnameParent.parent().find("small").remove()
        fnameParent.removeClass("is-invalid")
        if(fname == '') {
            fnameParent.parent().append("<small class='text-danger fw-bold'>Field cannot be blank</small>")
            fnameParent.addClass("is-invalid")
        } else {

            if(!isName(fname)) {
                fnameParent.parent().append("<small class='text-danger fw-bold'>Letter only from A-Z</small>")
                fnameParent.addClass("is-invalid")
            }

        }


        let mnameParent = $("#getMiddlename")
        let mname = $("#getMiddlename").val()
        mnameParent.parent().find("small").remove()
        mnameParent.removeClass("is-invalid")
        if(mname == '') {
            mnameParent.parent().append("<small class='text-danger fw-bold'>Field cannot be blank</small>")
            mnameParent.addClass("is-invalid")
        } else {

            if(!isName(mname)) {
                mnameParent.parent().append("<small class='text-danger fw-bold'>Letter only from A-Z</small>")
                mnameParent.addClass("is-invalid")
            }

        }


        let lnameParent = $("#getLastname")
        let lname = $("#getLastname").val()
        lnameParent.parent().find("small").remove()
        lnameParent.removeClass("is-invalid")
        if(lname == '') {
            lnameParent.parent().append("<small class='text-danger fw-bold'>Field cannot be blank</small>")
            lnameParent.addClass("is-invalid")
        } else {

            if(!isName(lname)) {
                lnameParent.parent().append("<small class='text-danger fw-bold'>Letter only from A-Z</small>")
                lnameParent.addClass("is-invalid")
            }

        }


        let emailParent = $("#getEmail")
        let email = $("#getEmail").val()
        emailParent.parent().find("small").remove()
        emailParent.removeClass("is-invalid")
        if(email == '') {
            emailParent.parent().append("<small class='text-danger fw-bold'>Field cannot be blank</small>")
            emailParent.addClass("is-invalid")
        } else {

            if(!isEmail(email)) {
                emailParent.parent().append("<small class='text-danger fw-bold'>Invalid email format</small>")
                emailParent.addClass("is-invalid")
            }

        }


        
        let telephoneParent = $("#getTelephone")
        let telephone = $("#getTelephone").val()
        telephoneParent.parent().find("small").remove()
        telephoneParent.removeClass("is-invalid")
        if(telephone == '') {
            telephoneParent.parent().append("<small class='text-danger fw-bold'>Field cannot be blank</small>")
            telephoneParent.addClass("is-invalid")
        } else {

            if(!isContact(telephone)) {
                telephoneParent.parent().append("<small class='text-danger fw-bold'>Invalid contact format</small>")
                telephoneParent.addClass("is-invalid")
            }

        }


        let websiteParent = $("#getWebsite")
        let website = $("#getWebsite").val()
        websiteParent.parent().find("small").remove()
        websiteParent.removeClass("is-invalid")
        if(website == '') {
            websiteParent.parent().append("<small class='text-danger fw-bold'>Field cannot be blank</small>")
            websiteParent.addClass("is-invalid")
        } else {

            if(!isWebsite(website)) {
                websiteParent.parent().append("<small class='text-danger fw-bold'>Invalid site format</small>")
                websiteParent.addClass("is-invalid")
            }

        }

        let addressParent = $("#getAddress")
        let address = $("#getAddress").val()
        addressParent.parent().find("small").remove()
        addressParent.removeClass("is-invalid")
        if(address == '') {
            addressParent.parent().append("<small class='text-danger fw-bold'>Field cannot be blank</small>")
            addressParent.addClass("is-invalid")
        }


    })



    $("#btnToggleModal").click(function(){
        $(".modal-addresses").css("display", "block")
    })

    $("#btnClose").click(function(){
        $("#getFirstname").parent().find("small").remove()
        $("#getMiddlename").parent().find("small").remove()
        $("#getLastname").parent().find("small").remove()
        $("#getEmail").parent().find("small").remove()
        $("#getTelephone").parent().find("small").remove()
        $("#getWebsite").parent().find("small").remove()
        $("#getAddress").parent().find("small").remove()

        
        $("#getFirstname").removeClass("is-invalid")
        $("#getMiddlename").removeClass("is-invalid")
        $("#getLastname").removeClass("is-invalid")
        $("#getEmail").removeClass("is-invalid")
        $("#getTelephone").removeClass("is-invalid")
        $("#getWebsite").removeClass("is-invalid")
        $("#getAddress").removeClass("is-invalid")


        $(".modal-addresses").css("display", "none")
    })

    
})