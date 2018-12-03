var a0;
var voltage_conductivity;
var resistance;
var resistivity;
var conductivity;
var TDS;
var a1;
var voltage_turbidity;
var turbidity;
var a2;
var voltage_ph;
var ph;
		    
function myFunction(id) {
    if(cpf){
        //get the value of pin A0
        var a0 = cpf.get("a0");
        voltage_conductivity = (a0/1023)*5;
        resistance = ((5*10000)/voltage_conductivity)-10000;
        resistivity = resistance*0.0002/0.01;
        conductivity = (1/resistivity)*1000;
        TDS = conductivity*10*0.67;
        salinity = (Math.pow((conductivity/100), 1.0878))*0.4665;8
	
        document.getElementById("TDS").innerHTML = String(TDS) + " ppm \n";
        document.getElementById("Conductivity").innerHTML = String(conductivity) + " mSiemens/m \n";
        document.getElementById("Salinity").innerHTML = String(salinity)+ " g/L";
    
   var a1 = cpf.get("a1");
   voltage_turbidity = (a1/1023)*5;
   turbidity = Math.abs((5742.3*voltage_turbidity)-(1120.4*(voltage_turbidity*voltage_turbidity))-4352.9);
   if (voltage_turbidity >= 4.20)
	    {
    turbidity = 0;
   }
document.getElementById("Turbidity").innerHTML = String(turbidity) + " NTU";
   var a2 = cpf.get("a2");
   var voltage_ph = (a2/1023)*5;
   var ph = 7+((2.5-voltage_ph)/0.18);
 document.getElementById("pH").innerHTML = String(ph);
    }
}
// init the pin
function setup(){
    if(cpf){
        cpf.setPinMode('["resetPin"],["setPinMode", "analog", 0, "INPUT"]');
        cpf.setPinMode('["resetPin"],["setPinMode", "analog", 1, "INPUT"]');
        cpf.setPinMode('["resetPin"],["setPinMode", "analog", 2, "INPUT"]');   
    }
}
setup();