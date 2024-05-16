//Creating arrays for id
function to_array(id){  
    const arr = ["",id.concat("1"),id.concat("2"),id.concat("3"),id.concat("4"),id.concat("5"),id.concat("6"),id.concat("7"),id.concat("8"),id.concat("9"),id.concat("10")];
    return arr;
};

//Creating tables on website
function table_con(name,id1,id2,id3,id4,id5){
    let a = 1
    document.write("<table><th class='t'>",name,"</th><tr><td class='t'>Week</td>");
    while(a<=10){
        document.write("<td class='t'>",a,"</td>");
        a++
    };
    document.write("</tr>")
    
    a = 1
    document.write("<tr><td class='t'>Needed units</td>");
        while(a<=10){
        document.write("<td id='",id1,a,"'></td>")
        a++  
    };
    document.write("</tr>")

    a =1
    document.write("<tr><td class='t'>Avaliable units</td>");
        while(a<=10){
        document.write("<td id='",id2,a,"'></td>");
        a++
    };
    document.write("</tr>")

    a =1
    document.write("<tr><td class='t'>Needed for production</td>");
        while(a<=10){
        document.write("<td id='",id3,a,"'></td>");
        a++
    };
    document.write("</tr>")

    a =1
    document.write("<tr><td class='t'>Assembly</td>");
        while(a<=10){
        document.write("<td id='",id4,a,"'></td>");
        a++
    };
    document.write("</tr>")

    a =1
    document.write("<tr><td class='t'>Planned delivery</td>");
        while(a<=10){
        document.write("<td id='",id5,a,"'></td>");
        a++
    };
    document.write("</tr></table>")
};

//Creating item forms

function form(fid1,fid2){
    document.write("<form><label for='lname'>Avaliable units</label><br><input type='number' id='",fid1,"' value='0' min='0'><br><br><label for='fname'>Delivery time</label><br><input type='number' id='",fid2,"' value='0' min='0' max='9'><br><br></form> ")
};

//Main mrp function

function mrp(){
    //Tables
    
    //Table data
    let d_date = document.getElementById("d_date").value;
    let r_amount = document.getElementById("r_amount").value;
    let a_units = document.getElementById("a_units").value;
    let p_time = document.getElementById("p_time").value;
     //Other
    let n_units = r_amount - a_units
    let i = 1
    if (n_units<0){n_units = null};
    //Requiered units
    to_array("nu_table_")
    const d_date_a = to_array("nu_table_");
     document.getElementById(d_date_a[d_date]).innerHTML = r_amount
    
    //Avaliable parts
    const a_parts_a = to_array("au_table_");
    while (i<=d_date){
        document.getElementById(a_parts_a[i]).innerHTML = a_units
        i++
    };
    
    //Needed units(for production)
    const n_units_a =  to_array("np_table_");
      document.getElementById(n_units_a[d_date]).innerHTML = n_units
    
    //Production time(starting production)
    const p_time_a = to_array("a_table_"); 
    document.getElementById(p_time_a[d_date-p_time]).innerHTML = n_units
    
    //Planed delivery
    const p_delivery_a =  to_array("pd_table_");
    document.getElementById(p_delivery_a[d_date]).innerHTML = n_units
    




    //Legs
    if (a_units<r_amount){
    //Legs data
    let leg_amount = document.getElementById("leg_amount").value
    let leg_p_time = document.getElementById("leg_p_time").value
    let leg_requiered_amount = (a_units * 4)-leg_amount
    i = 1
    
    if (leg_requiered_amount < 0){leg_requiered_amount = null};

    //Requiered units
    const nu_leg_a = to_array("nu_legs_"); 
    document.getElementById(nu_leg_a[(d_date-p_time)]).innerHTML = n_units*4
    
    //Avaliable units
    const au_leg_a = to_array("au_legs_"); 
    while (i<=d_date-p_time){
        document.getElementById(au_leg_a[i]).innerHTML = leg_amount
        i++
    };

    //Needed for production
    const np_leg_a = to_array("np_legs_"); 
    document.getElementById(np_leg_a[d_date-p_time]).innerHTML = (n_units*4)-leg_amount

    //Order
    const a_leg_a = to_array("a_legs_");    
    document.getElementById(a_leg_a[(d_date-p_time)-leg_p_time]).innerHTML = (n_units*4)-leg_amount
    
    //Planed delivery
    const pd_leg_a = to_array("pd_legs_"); 
    document.getElementById(pd_leg_a[d_date-p_time]).innerHTML = (n_units*4)-leg_amount
    

    //Tabletop

    //Tabletop data
    let tabletop_amount = document.getElementById("tabletop_amount").value
    let tabletop_p_time = document.getElementById("tabletop_p_time").value
    i = 1
    
    if (n_units < 0){n_units = null};

    //Requiered units
    const nu_tabletop_a = to_array("nu_tabletop_"); 
    document.getElementById(nu_tabletop_a[(d_date-p_time)]).innerHTML = n_units
    
    //Avaliable units
    const au_tabletop_a = to_array("au_tabletop_"); 
    while (i<=d_date-p_time){
        document.getElementById(au_tabletop_a[i]).innerHTML = tabletop_amount
        i++
    };

    //Needed for production
    const np_tabletop_a = to_array("np_tabletop_"); 
    document.getElementById(np_tabletop_a[d_date-p_time]).innerHTML = n_units-tabletop_amount

    //Order
    const a_tabletop_a = to_array("a_tabletop_");    
    document.getElementById(a_tabletop_a[(d_date-p_time)-tabletop_p_time]).innerHTML = n_units-tabletop_amount
    
    //Planed delivery
    const pd_tabletop_a = to_array("pd_tabletop_"); 
    document.getElementById(pd_tabletop_a[d_date-p_time]).innerHTML = n_units-tabletop_amount


    //Screws

    //Screws data
    let screw_amount = document.getElementById("screw_amount").value
    let screw_p_time = document.getElementById("screw_p_time").value
    i = 1 

    //Requiered units
    const nu_screw_a = to_array("nu_screw_");
    document.getElementById(nu_screw_a[(d_date-p_time)-leg_p_time]).innerHTML = ((n_units*4)-leg_amount)*4

    //Avaliable units
    const au_screw_a = to_array("au_screw_");
    while (i<=(d_date-p_time)-leg_p_time){
        document.getElementById(au_screw_a[i]).innerHTML = screw_amount
        i++
    }; 
    
    //Needed for production
    const np_screw_a = to_array("np_screw_");
    document.getElementById(np_screw_a[(d_date-p_time)-leg_p_time]).innerHTML = ((n_units*4)-leg_amount)*4-screw_amount

    //Order
    const a_screw_a = to_array("a_screw_");
    document.getElementById(a_screw_a[((d_date-p_time)-leg_p_time)-screw_p_time]).innerHTML = ((n_units*4)-leg_amount)*4-screw_amount
    

    //Planed delivery
    const pd_screw_a = to_array("pd_screw_");
    document.getElementById(pd_screw_a[(d_date-p_time)-leg_p_time]).innerHTML = ((n_units*4)-leg_amount)*4-screw_amount

    //Board

    //Board data
    let board_amount = document.getElementById("board_amount").value
    let board_p_time = document.getElementById("board_p_time").value
    i = 1 

    //Requiered units
    const nu_board_a = to_array("nu_board_");
    document.getElementById(nu_board_a[(d_date-p_time)-leg_p_time]).innerHTML = (n_units*4)-leg_amount

    //Avaliable units
    const au_board_a = to_array("au_board_");
    while (i<=(d_date-p_time)-leg_p_time){
        document.getElementById(au_board_a[i]).innerHTML = board_amount
        i++
    }; 

    //Needed for production
    const np_board_a = to_array("np_board_");
    document.getElementById(np_board_a[d_date-p_time-leg_p_time]).innerHTML = ((n_units*4)-leg_amount)-board_amount


    //Order
    const a_board_a = to_array("a_board_");
    document.getElementById(a_board_a[((d_date-p_time)-leg_p_time)-board_p_time]).innerHTML = ((n_units*4)-leg_amount)-board_amount
    

    //Planed delivery
    const pd_board_a = to_array("pd_board_");
    document.getElementById(pd_board_a[d_date-p_time-leg_p_time]).innerHTML = ((n_units*4)-leg_amount)-board_amount

    //Strip

    //Strip data
    let strip_amount = document.getElementById("strip_amount").value
    let strip_p_time = document.getElementById("strip_p_time").value
    i = 1 

    //Requiered units
    const nu_strip_a = to_array("nu_strip_");
    document.getElementById(nu_strip_a[(d_date-p_time)-tabletop_p_time]).innerHTML = (n_units-tabletop_amount)*4


    //Avaliable units
    const au_strip_a = to_array("au_strip_");
    while (i<=(d_date-p_time)-tabletop_p_time){
        document.getElementById(au_strip_a[i]).innerHTML = strip_amount
        i++
    };

    //Needed for production
    const np_strip_a = to_array("np_strip_");
    document.getElementById(np_strip_a[(d_date-p_time)-tabletop_p_time]).innerHTML = (n_units-tabletop_amount)*4-strip_amount

    //Order
    const a_strip_a = to_array("a_strip_");
    document.getElementById(a_strip_a[((d_date-p_time)-tabletop_p_time)-strip_p_time]).innerHTML = (n_units-tabletop_amount)*4-strip_amount
    
    //Planed delivery
    const pd_strip_a = to_array("pd_strip_");
    document.getElementById(pd_strip_a[(d_date-p_time)-tabletop_p_time]).innerHTML = (n_units-tabletop_amount)*4-strip_amount
    
    //Counteryop

    //Countertop data
    let countertop_amount = document.getElementById("countertop_amount").value
    let countertop_p_time = document.getElementById("countertop_p_time").value
    i = 1 

    //Requiered units
    const nu_countertop_a = to_array("nu_countertop_");
    document.getElementById(nu_countertop_a[(d_date-p_time)-tabletop_p_time]).innerHTML = (n_units-tabletop_amount)
   
    //Avaliable units
    const au_countertop_a = to_array("au_countertop_");
    while (i<=(d_date-p_time)-tabletop_p_time){
        document.getElementById(au_countertop_a[i]).innerHTML = countertop_amount
        i++
    }; 

    //Needed for production
    const np_countertop_a = to_array("np_countertop_");
    document.getElementById(np_countertop_a[d_date-p_time-tabletop_p_time]).innerHTML = (n_units-tabletop_amount)-countertop_amount

    //Order
    const a_countertop_a = to_array("a_countertop_");
    document.getElementById(a_countertop_a[((d_date-p_time)-tabletop_p_time)-countertop_p_time]).innerHTML = (n_units-tabletop_amount)-countertop_amount
    
    //Planed delivery
    const pd_countertop_a = to_array("pd_countertop_");
    document.getElementById(pd_countertop_a[d_date-p_time-tabletop_p_time]).innerHTML = (n_units-tabletop_amount)-countertop_amount
    };
};