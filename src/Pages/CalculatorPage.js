import React from 'react';
import {Row, Col, Form, Button, Tab} from 'react-bootstrap';

export function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    if (Math.abs(ageDate.getUTCFullYear() - 1970) > 0){
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }else return 0;
}
const kroosCurse = 1.18;
const insurancePercent = 1.0;
const aukcion = [
    'copart',
    'iaai',
];
const state = [
    'TX',
    'CA',
    'NJ',
    'GA',
    'FL',
    'WA',
];
const copart = [
    {name: 'ABILENE - TX'	,state:'TX',	price: 405},
    {name: 'AK - ANCHORAGE'	,state:'CA',	price: 1930},
    {name: 'ALBANY - NY'	,state:'NJ',	price: 305},
    {name: 'ALBUQUERQUE - NM'	,state:'CA',	price: 530},
    {name: 'ALTOONA - PA'	,state:'NJ',	price: 430},
    {name: 'ALORTON - IL'	,state:'NJ',	price: 580},
    {name: 'AMARILLO - TX'	,state:'TX',	price: 405},
    {name: 'ANDREWS - TX'	,state:'TX',	price: 455},
    {name: 'ANTELOPE - CA'	,state:'CA',	price: 355},
    {name: 'ANTHONY SUBLOT - TX'	,state:'TX',	price: 480},
    {name: 'APPLETON - WI'	,state:'NJ',	price: 605},
    {name: 'ATLANTA EAST - GA'	,state:'GA',	price: 280},
    {name: 'ATLANTA NORTH - GA'	,state:'GA',	price: 280},
    {name: 'ATLANTA SOUTH - GA'	,state:'GA',	price: 280},
    {name: 'ATLANTA WEST - GA'	,state:'GA',	price: 280},
    {name: 'AUSTIN - TX'	,state:'TX',	price: 305},
    {name: 'BAKERSFIELD - CA'	,state:'CA',	price: 255},
    {name: 'BALTIMORE - MD'	,state:'NJ',	price: 305},
    {name: 'BALTIMORE  SUBLOT  - MD'	,state:'NJ',	price: 355},
    {name: 'BATON ROUGE - LA'	,state:'TX',	price: 330},
    {name: 'BILLINGS - MT'	,state:'CA',	price: 830},
    {name: 'BIRMINHAM - AL SUBLOT'	,state:'GA',	price: 280},
    {name: 'BIRMINHAM - AL'	,state:'GA',	price: 355},
    {name: 'BROCTON SUBLOT - NY'	,state:'NJ',	price: 530},
    {name: 'BOISE - ID'	,state:'CA',	price: 610},
    {name: 'BUFFALO - NY'	,state:'NJ',	price: 490},
    {name: 'CANDIA - NH'	,state:'NJ',	price: 430},
    {name: 'CARTERSVILLE - GA'	,state:'GA',	price: 355},
    {name: 'CASPER - WY'	,state:'NJ',	price: 1230},
    {name: 'CHAMBERSBURG - PA'	,state:'NJ',	price: 405},
    {name: 'CHARLESTON - WV'	,state:'NJ',	price: 530},
    {name: 'CHICAGO NORTH - IL'	,state:'NJ',	price: 480},
    {name: 'CHICAGO SOUTH - IL'	,state:'NJ',	price: 480},
    {name: 'CHINA GROVE - NC'	,state:'GA',	price: 280},
    {name: 'CLEVELAND EAST - OH'	,state:'NJ',	price: 480},
    {name: 'CLEVELAND WEST - OH'	,state:'NJ',	price: 480},
    {name: 'COLORADO SPRINGS - CO'	,state:'CA',	price: 580},
    {name: 'COLUMBIA - SC'	,state:'GA',	price: 250},
    {name: 'COLUMBIA - MO'	,state:'NJ',	price: 580},
    {name: 'COLUMBUS - OH'	,state:'NJ',	price: 480},
    {name: 'CORPUS CHRISTI - TX'	,state:'TX',	price: 310},
    {name: 'CRASHEDTOYS ATLANTA'	,state:'GA',	price: 280},
    {name: 'CRASHEDTOYS DALLAS- TX'	,state:'TX',	price: 255},
    {name: 'CRASHEDTOYS EAST BETHEL - MN'	,state:'NJ',	price: 605},
    {name: 'CRASHEDTOYS ELDRIDGE - IA'	,state:'NJ',	price: 630},
    {name: 'CRASHEDTOYS MINNEAPOLIS-MN'	,state:'NJ',	price: 580},
    {name: 'CT BERLIN SUBLOT - CT'	,state:'NJ',	price: 355},
    {name: 'DALLAS - TX'	,state:'TX',	price: 280},
    {name: 'DALLAS SOUTH - TX'	,state:'TX',	price: 280},
    {name: 'DANVILLE - VA'	,state:'NJ',	price: 480},
    {name: 'DAVENPORT - IA'	,state:'NJ',	price: 630},
    {name: 'DAYTON - OH'	,state:'NJ',	price: 480},
    {name: 'COLORADO SPRINGS - SUBLOT'	,state:'CA',	price: 580},
    {name: 'DENVER - CO'	,state:'CA',	price: 530},
    {name: 'DENVER CENTRAL - CO'	,state:'CA',	price: 530},
    {name: 'DENVER SOUTH - CO'	,state:'CA',	price: 555},
    {name: 'DES MOINES - IA'	,state:'NJ',	price: 630},
    {name: 'DETROIT - MI'	,state:'NJ',	price: 480},
    {name: 'EL PASO - TX'	,state:'TX',	price: 430},
    {name: 'EUGEN - OR'	,state:'CA',	price: 555},
    {name: 'EXETER - RI'	,state:'NJ',	price: 355},
    {name: 'FAYETTEVILLE - AR'	,state:'TX',	price: 455},
    {name: 'FLINT - MI'	,state:'NJ',	price: 555},
    {name: 'FREDERICKSBURG - VA'	,state:'NJ',	price: 430},
    {name: 'FRESNO - CA'	,state:'CA',	price: 330},
    {name: 'FT. PIERCE - FL'	,state:'FL',	price: 230},
    {name: 'FT. WORHT - TX'	,state:'TX',	price: 280},
    {name: 'FT. LUPTON - CO'	,state:'TX',	price: 690},
    {name: 'GLASSBORO EAST - NJ'	,state:'NJ',	price: 255},
    {name: 'GRAHAM - WA'	,state:'WA',	price: 205},
    {name: 'GRAY SUBLOT - ME'	,state:'NJ',	price: 480},
    {name: 'GREER - SC'	,state:'GA',	price: 280},
    {name: 'HAMMOND - IN'	,state:'NJ',	price: 505},
    {name: 'HAM LAKE SUBLOT - MN'	,state:'NJ',	price: 660},
    {name: 'HASLET SUBLOT  - TX'	,state:'TX',	price: 480},
    {name: 'HAMPTON - VA'	,state:'NJ',	price: 430},
    {name: 'HARISBURG - PA'	,state:'NJ',	price: 355},
    {name: 'HARTFORD - CT'	,state:'NJ',	price: 280},
    {name: 'HARTFORD SPRINGFIELD - CT'	,state:'NJ',	price: 355},
    {name: 'HAYWARD - CA'	,state:'CA',	price: 380},
    {name: 'HELENA - MT'	,state:'CA',	price: 930},
    {name: 'HONOLULU - HI'	,state:'CA',	price: 1860},
    {name: 'HOUSTON - TX'	,state:'TX',	price: 230},
    {name: 'HARTFORD CITY - IN'	,state:'NJ',	price: 555},
    {name: 'INDIANAPOLIS - IN'	,state:'NJ',	price: 555},
    {name: 'IONIA - MI'	,state:'NJ',	price: 555},
    {name: 'JACKSON - MS'	,state:'GA',	price: 430},
    {name: 'JACKSONVILLE EAST - FL'	,state:'FL',	price: 255},
    {name: 'JACKSONVILLE WEST - FL'	,state:'FL',	price: 255},
    {name: 'KANSAS CITY - KS'	,state:'NJ',	price: 605},
    {name: 'KINCHELOE - MI'	,state:'NJ',	price: 955},
    {name: 'KNOXVILLE - TN'	,state:'GA',	price: 380},
    {name: 'LANSING - MI'	,state:'NJ',	price: 580},
    {name: 'LANCASTER SUBLOT - CA'	,state:'CA',	price: 330},
    {name: 'LAS VEGAS - NV'	,state:'CA',	price: 330},
    {name: 'LEXINGTON EAST - KY'	,state:'NJ',	price: 530},
    {name: 'LEXINGTON WEST - KY'	,state:'NJ',	price: 530},
    {name: 'LINCOLN - NE'	,state:'NJ',	price: 705},
    {name: 'LITTLE ROCK - AR'	,state:'TX',	price: 455},
    {name: 'LANCATER SUBLOT - CA'	,state:'CA',	price: 330},
    {name: 'LONG BEACH - CA'	,state:'CA',	price: 280},
    {name: 'LONG ISLAND - NY'	,state:'NJ',	price: 280},
    {name: 'LONGVIEW - TX'	,state:'TX',	price: 330},
    {name: 'LOS ANGELES - CA'	,state:'CA',	price: 180},
    {name: 'LOUISVILLE - KY'	,state:'NJ',	price: 580},
    {name: 'LOUIS SUBLOT - IL'	,state:'NJ',	price: 630},
    {name: 'LUFKIN - TX'	,state:'TX',	price: 280},
    {name: 'LUMBERTON SUBLOT - NC'	,state:'GA',	price: 380},
    {name: 'LYMAN - ME'	,state:'NJ',	price: 480},
    {name: 'EAST POINT - GA'	,state:'GA',	price: 280},
    {name: 'MACON - GA'	,state:'GA',	price: 280},
    {name: 'MADISON - WI'	,state:'NJ',	price: 630},
    {name: 'MARTINEZ - CA'	,state:'CA',	price: 355},
    {name: 'MCALLEN - TX'	,state:'TX',	price: 380},
    {name: 'MEBANE - NC'	,state:'GA',	price: 330},
    {name: 'MEMPHIS - TN'	,state:'GA',	price: 455},
    {name: 'METTER SUBLOT - GA '	,state:'GA',	price: 280},
    {name: 'MIAMI CENTRAL - FL'	,state:'FL',	price: 210},
    {name: 'MIAMI NORTH - FL'	,state:'FL',	price: 210},
    {name: 'MIAMI SOUTH - FL'	,state:'FL',	price: 210},
    {name: 'MILWAUKEE - WI'	,state:'NJ',	price: 555},
    {name: 'MINNEAPOLIS - MN'	,state:'NJ',	price: 580},
    {name: 'MINNEAPOLIS NORTH - MN'	,state:'NJ',	price: 580},
    {name: 'MOBILE - AL'	,state:'GA',	price: 380},
    {name: 'MOCKSVILLE - NC'	,state:'GA',	price: 330},
    {name: 'MONTGOMERY - AL'	,state:'GA',	price: 380},
    {name: 'NASHVILLE - TN'	,state:'GA',	price: 380},
    {name: 'NEW ORLEANS - LA'	,state:'TX',	price: 405},
    {name: 'NEWBURGH - NY'	,state:'NJ',	price: 280},
    {name: 'NORTH BOSTON - MA'	,state:'NJ',	price: 330},
    {name: 'NORTH CHARLESTON - SC'	,state:'GA',	price: 255},
    {name: 'NORTH SEATTLE - WA'	,state:'WA',	price: 330},
    {name: 'OCALA - FL'	,state:'FL', 	price: 230},
    {name: 'OGDEN SUBLOT - UT'	,state:'CA',	price: 480},
    {name: 'OKLAHOMA CITY - OK'	,state:'TX',	price: 405},
    {name: 'ORMY SUBLOT - TX'	,state:'TX',	price: 435},
    {name: 'ORLANDO NORTH - FL'	,state:'FL',	price: 280},
    {name: 'ORLANDO SOUTH - FL'	,state:'FL',	price: 280},
    {name: 'ORONO SUBLOT - ME'	,state:'NJ',	price: 580},
    {name: 'ORLEANS SUBLOT - VT'	,state:'NJ',	price: 580},
    {name: 'PASCO - WA'	,state:'WA',	price: 330},
    {name: 'PEORIA - IL'	,state:'NJ',	price: 560},
    {name: 'PHILADELPHIA - PA'	,state:'NJ',	price: 250},
    {name: 'PHOENIX - AZ'	,state:'CA',	price: 330},
    {name: 'PHILADELPHIA EAST SUBLOT- PA '	,state:'NJ',	price: 250},
    {name: 'PITTSBURGH EAST - PA'	,state:'NJ',	price: 430},
    {name: 'PITTSBURGH NORTH - PA'	,state:'NJ',	price: 430},
    {name: 'PITTSBURGH SOUTH - PA'	,state:'NJ',	price: 430},
    {name: 'PORTLAND SOUTH - OR'	,state:'CA',	price: 555},
    {name: 'PUNTA GORDA - FL'	,state:'FL',	price: 280},
    {name: 'RALEIGH - NC'	,state:'GA',	price: 330},
    {name: 'RANCHO CUCAMONGA - CA'	,state:'CA',	price: 220},
    {name: 'RENO - NV'	,state:'CA',	price: 455},
    {name: 'RICHMOND - VA'	,state:'NJ',	price: 380},
    {name: 'ROCHESTER - NY'	,state:'NJ',	price: 405},
    {name: 'SACRAMENTO - CA'	,state:'CA',	price: 380},
    {name: 'SACRAMENTO  SUBLOT- CA'	,state:'CA',	price: 465},
    {name: 'RICHMOND EAST - VA'	,state:'NJ',	price: 430},
    {name: 'SALT LAKE CITY - UT'	,state:'CA',	price: 480},
    {name: 'SAN ANTONIO - TX'	,state:'TX',	price: 330},
    {name: 'SAN BERNARDINO - CA'	,state:'CA',	price: 200},
    {name: 'SAN DIEGO - CA'	,state:'CA',	price: 230},
    {name: 'SAN JOSE - CA'	,state:'CA',	price: 355},
    {name: 'SANTA PAULA SUBLOT - CA'	,state:'CA',	price: 290},
    {name: 'SAVANNAH - GA'	,state:'GA',	price: 180},
    {name: 'SCRANTON - PA'	,state:'NJ',	price: 280},
    {name: 'SEAFORD - DE'	,state:'NJ', 	price: 355},
    {name: 'SHREVEPORT - LA'	,state:'TX',	price: 305},
    {name: 'SIKESTON - MO'	,state:'NJ',	price: 580},
    {name: 'SANTA PAULA SUBLOT - CA'	,state:'CA',	price: 290},
    {name: 'SOMERVILLE - NJ'	,state:'NJ',	price: 190},
    {name: 'SOUTH BOSTON - MA'	,state:'NJ',	price: 330},
    {name: 'SOUTHERN ILLINOIS - IL'	,state:'NJ',	price: 580},
    {name: 'SPOKANE - WA'	,state:'WA',	price: 430},
    {name: 'SPRINGFIELD - MO'	,state:'NJ',	price: 580},
    {name: 'SPRINGFIELD SUBLOT - MO'	,state:'NJ',	price: 710},
    {name: 'ST. CLOUD - MN'	,state:'NJ',	price: 605},
    {name: 'ST. LOUIS - MO'	,state:'NJ',	price: 580},
    {name: 'SUN VALLEY  SUBLOT - CA'	,state:'CA',	price: 180},
    {name: 'SYRACUSE - NY'	,state:'NJ',	price: 330},
    {name: 'TALLAHASSEE - FL'	,state:'FL',	price: 310},
    {name: 'TAMPA SOUTH - FL'	,state:'FL',	price: 305},
    {name: 'TANNER - AL'	,state:'GA',	price: 405},
    {name: 'TIFTON - GA'	,state:'GA',	price: 280},
    {name: 'TICKFLAW SUBLOT - LA'	,state:'TX',	price: 430},
    {name: 'TRENTON - NJ'	,state:'NJ',	price: 190},
    {name: 'TUCSON - AZ'	,state:'CA',	price: 430},
    {name: 'TULSA - OK'	,state:'TX',	price: 430},
    {name: 'VALLEJO - CA'	,state:'CA',	price: 355},
    {name: 'VAN NUYS - CA'	,state:'CA',	price: 180},
    {name: 'WILMER SUBLOT - TX'	,state:'TX',	price: 330},
    {name: 'WACO - TX'	,state:'TX',	price: 330},
    {name: 'WALTON - KY'	,state:'NJ',	price: 530},
    {name: 'WASHINGTON DC - MD'	,state:'NJ',	price: 305},
    {name: 'WAUKESHA SUBLOT - WI'	,state:'NJ',	price: 630},
    {name: 'WEST PALM BEACH - FL'	,state:'FL',	price: 210},
    {name: 'WEST WARREN - MA'	,state:'NJ',	price: 330},
    {name: 'WHEELING - IL'	,state:'FL',	price: 480},
    {name: 'WHITE MARSH SUBLOT  - MD'	,state:'NJ',	price: 355},
    {name: 'WICHITA - KS'	,state:'TX',	price: 610},
    {name: 'YORK HAVEN - PA'	,state:'NJ',	price: 355},
    {name: 'PORTLAND NORTH - OR'	,state:'CA',	price: 555},
    {name: 'SPARTANBURG SUBLOT- SC'	,state:'GA',	price: 305},
    {name: 'GASTON SUBLOT - SC'	,state:'GA',	price: 250},
];
const iaai = [
    {name: 'ACE - Carson (CA)',	state: 'CA',	price: 290},
    {name: 'ACE - Perris (CA)',	state: 'CA',	price: 240},
    {name: 'ADESA Birmingham (AL)',	state: 'GA',	price: 380},
    {name: 'Abilеne (TX)',	state: 'TX',	price: 405},
    {name: 'Akron - Canton (OH)',	state: 'NJ',	price: 430},
    {name: 'Albany (NY)',	state: 'NJ',	price: 305},
    {name: 'Albuquerque (NM)',	state: 'TX',	price: 580},
    {name: 'Altoona (PA)',	state: 'NJ',	price: 430},
    {name: 'Amarillo (TX)',	state: 'TX',	price: 405},
    {name: 'Anaheim (CA)',	state: 'CA',	price: 180},
    {name: 'Anchorage (AL)',	state: 'CA',	price: 1980},
    {name: 'Appleton (WI)',	state: 'NJ',	price: 630},
    {name: 'Asheville (NC)',	state: 'GA',	price: 340},
    {name: 'Ashland (KY)',	state: 'NJ',	price: 580},
    {name: 'Atlanta (GA)',	state: 'GA',	price: 280},
    {name: 'Atlanta East (GA)',	state: 'GA',	price: 280},
    {name: 'Atlanta North (GA)',	state: 'GA',	price: 290},
    {name: 'Atlanta South (GA)',	state: 'GA',	price: 280},
    {name: 'Austin (TX)',	state: 'TX',	price: 405},
    {name: 'Avenel New Jersey (NJ)',	state: 'NJ',	price: 180},
    {name: 'Baltimore (MD)',	state: 'NJ',	price: 305},
    {name: 'Billings (MT)',	state: 'CA',	price: 830},
    {name: 'Birmingham (AL)',	state: 'GA',	price: 380},
    {name: 'Boise (ID)',	state: 'CA',	price: 650},
    {name: 'Boston-Shirley (MA)',	state: 'NJ',	price: 330},
    {name: 'Bowling Green (KY)',	state: 'NJ',	price: 730},
    {name: 'Bridgeport (PA)',	state: 'NJ',	price: 255},
    {name: 'Buckhannon (WV)',	state: 'NJ',	price: 550},
    {name: 'Buffalo (NY)',	state: 'NJ',	price: 480},
    {name: 'Burbank',	state: 'CA',	price: 250},
    {name: 'Burlington (VT)',	state: 'NJ',	price: 530},
    {name: 'BYRAM (MS)',	state: 'TX',	price: 380},
    {name: 'Casper (WY)',	state: 'NJ',	price: 1450},
    {name: 'Central New Jersey (NJ)',	state: 'NJ',	price: 180},
    {name: 'Charleston (SC)',	state: 'GA',	price: 255},
    {name: 'Charlotte (NC)',	state: 'GA',	price: 280},
    {name: 'Chattanooga (TN)',	state: 'GA',	price: 430},
    {name: 'Chicago - North (IL)',	state: 'NJ',	price: 480},
    {name: 'Chicago - South (IL)',	state: 'NJ',	price: 480},
    {name: 'Chicago - West (IL)',	state: 'NJ',	price: 480},
    {name: 'Cincinnati - South (OH)',	state: 'NJ',	price: 505},
    {name: 'Cincinnati OH',	state: 'NJ',	price: 455},
    {name: 'Clearwater (FL)',	state: 'FL',	price: 250},
    {name: 'Cleveland (OH)',	state: 'NJ',	price: 455},
    {name: 'Colton (CA)',	state: 'CA',	price: 190},
    {name: 'Columbia (SC)',	state: 'GA',	price: 250},
    {name: 'Columbus (OH)',	state: 'NJ',	price: 480},
    {name: 'Concord (NC)',	state: 'GA',	price: 330},
    {name: 'Corpus Christi (TX)',	state: 'TX',	price: 305},
    {name: 'Culpeper VA',	state: 'NJ',	price: 430},
    {name: 'Dallas TX',	state: 'TX',	price: 280},
    {name: 'Dallas TX/FT. Worth',	state: 'TX',	price: 280},
    {name: 'Davenport IA',	state: 'NJ',	price: 605},
    {name: 'Dayton OH',	state: 'NJ',	price: 480},
    {name: 'Denver CO',	state: 'TX',	price: 605},
    {name: 'Denver East (CO)',	state: 'TX',	price: 605},
    {name: 'Des Moines (IA)',	state: 'NJ',	price: 630},
    {name: 'Detroit (MI)',	state: 'NJ',	price: 480},
    {name: 'Dothan (AL)',	state: 'GA',	price: 380},
    {name: 'Dundalk (MD)',	state: 'NJ',	price: 305},
    {name: 'East Bay (CA)',	state: 'CA',	price: 355},
    {name: 'East Providence (RI)',	state: 'NJ',	price: 355},
    {name: 'El Paso (TX)',	state: 'TX',	price: 430},
    {name: 'Erie (PA)',	state: 'NJ',	price: 505},
    {name: 'Englishtown (NJ)',	state: 'NJ',	price: 175},
    {name: 'Eugene (OR)',	state: 'CA',	price: 555},
    {name: 'Fargo (ND)',	state: 'NJ',	price: 930},
    {name: 'Fayetteville (AR)',	state: 'TX',	price: 455},
    {name: 'Flint (MI)',	state: 'NJ',	price: 555},
    {name: 'Fontana (CA)',	state: 'CA',	price: 200},
    {name: 'Fort Myers (FL)',	state: 'FL',	price: 280},
    {name: 'Fort Pierce (FL)',	state: 'FL',	price: 250},
    {name: 'Fremont (CA)',	state: 'CA',	price: 355},
    {name: 'Fresno (CA)',	state: 'CA',	price: 330},
    {name: 'Ft Worth North (TX)',	state: 'TX',	price: 305},
    {name: 'Grand Rapids (MI)',	state: 'NJ',	price: 555},
    {name: 'Great Lakes (MI)',	state: 'NJ',	price: 730},
    {name: 'Greensboro (NC)',	state: 'GA',	price: 330},
    {name: 'Greenville (SC)',	state: 'GA',	price: 330},
    {name: 'Grenada (MS)',	state: 'GA',	price: 455},
    {name: 'Gulf Coast (MS)',	state: 'GA',	price: 405},
    {name: 'Hartford (CT)',	state: 'NJ',	price: 280},
    {name: 'Hartford - South (CT)',	state: 'NJ',	price: 280},
    {name: 'High Desert (CA)',	state: 'CA',	price: 280},
    {name: 'Honolulu (HI)',	state: 'CA',	price: 1860},
    {name: 'Houston (TX)',	state: 'TX',	price: 230},
    {name: 'Houston - North (TX)',	state: 'TX',	price: 230},
    {name: 'Houston South (TX)',	state: 'TX',	price: 250},
    {name: 'Huntsville (AL)',	state: 'GA',	price: 380},
    {name: 'Indianapolis (IN)',	state: 'NJ',	price: 530},
    {name: 'Jackson (MS)',	state: 'TX',	price: 400},
    {name: 'Jacksonville (FL)',	state: 'GA',	price: 230},
    {name: 'Kansas City (KS)',	state: 'TX',	price: 450},
    {name: 'Knoxville (TN)',	state: 'GA',	price: 380},
    {name: 'Lafayette (LA)',	state: 'TX',	price: 330},
    {name: 'Las Vegas (NV)',	state: 'CA',	price: 330},
    {name: 'Laurel (MD)',	state: 'NJ',	price: 330},
    {name: 'Lexington (SC)',	state: 'GA',	price: 365},
    {name: 'Lincoln (IL)',	state: 'NJ',	price: 605},
    {name: 'Little Rock (AR)',	state: 'TX',	price: 430},
    {name: 'Long Island (NY)',	state: 'NJ',	price: 280},
    {name: 'Longview (TX)',	state: 'TX',	price: 330},
    {name: 'Los Angeles (CA)',	state: 'CA',	price: 170},
    {name: 'Louisville (KY)',	state: 'NJ',	price: 580},
    {name: 'Louisville North (KY)',	state: 'NJ',	price: 580},
    {name: 'Lubbock (TX)',	state: 'TX',	price: 475},
    {name: 'Macon (GA)',	state: 'GA',	price: 280},
    {name: 'Manchester (NH)',	state: 'NJ',	price: 380},
    {name: 'McAllen (TX)',	state: 'TX',	price: 330},
    {name: 'Memphis (TN)',	state: 'GA',	price: 455},
    {name: 'Metro DC (MD)',	state: 'NJ',	price: 305},
    {name: 'Miami (FL)',	state: 'FL',	price: 170},
    {name: 'Miami North (FL)',	state: 'FL',	price: 180},
    {name: 'Milwaukee (WI)',	state: 'NJ',	price: 560},
    {name: 'Minneapolis (MN)',	state: 'NJ',	price: 580},
    {name: 'Missoula (MT)',	state: 'CA',	price: 880},
    {name: 'Nashville (TN)',	state: 'GA',	price: 380},
    {name: 'New Castle (DE)',	state: 'NJ',	price: 280},
    {name: 'New Orleans (LA)',	state: 'TX',	price: 330},
    {name: 'New Orleans East (LA)',	state: 'TX',	price: 330},
    {name: 'Newburgh (NY)',	state: 'NJ',	price: 280},
    {name: 'North Hollywood (CA)',	state: 'CA',	price: 170},
    {name: 'Nothern New Jersey (NJ)',	state: 'NJ',	price: 170},
    {name: 'Nothern Virginia (VA)',	state: 'NJ',	price: 330},
    {name: 'Oklahoma City (OK)',	state: 'TX',	price: 405},
    {name: 'Omaha (NE)',	state: 'NJ',	price: 680},
    {name: 'Orlando (FL)',	state: 'FL',	price: 270},
    {name: 'Orlando-North (FL)',	state: 'FL',	price: 270},
    {name: 'Paducah (KY)',	state: 'NJ',	price: 650},
    {name: 'Pensacola (FL)',	state: 'FL',	price: 350},
    {name: 'Permian Basin (TX)',	state: 'TX',	price: 430},
    {name: 'Philadelphia (PA)',	state: 'NJ',	price: 250},
    {name: 'Philadelphia  East (PA)',	state: 'NJ',	price: 250},
    {name: 'Phoenix (AZ)',	state: 'CA',	price: 330},
    {name: 'Pittsburgh (PA)',	state: 'NJ',	price: 430},
    {name: 'Pittsburgh - North (PA)',	state: 'NJ',	price: 430},
    {name: 'Portage (WI)',	state: 'NJ',	price: 605},
    {name: 'Portland (OR)',	state: 'CA',	price: 480},
    {name: 'Portland - Gorham (ME)',	state: 'NJ',	price: 480},
    {name: 'Portland West (OR)',	state: 'CA',	price: 555},
    {name: 'Pulaski (VA)',	state: 'NJ',	price: 480},
    {name: 'Raleigh (NC)',	state: 'GA',	price: 305},
    {name: 'Reno (NV)',	state: 'CA',	price: 455},
    {name: 'Richmond (VA)',	state: 'NJ',	price: 380},
    {name: 'Roanoke (VA)',	state: 'NJ',	price: 430},
    {name: 'Rochester (NY)',	state: 'NJ',	price: 405},
    {name: 'Rosedale (MD)',	state: 'NJ',	price: 330},
    {name: 'Sacramento (CA)',	state: 'CA',	price: 355},
    {name: 'Salt Lake City (UT)',	state: 'CA',	price: 480},
    {name: 'San Antonio (TX)',	state: 'TX',	price: 330},
    {name: 'San Antonio-South (TX)',	state: 'TX',	price: 330},
    {name: 'San Diego (CA)',	state: 'CA',	price: 220},
    {name: 'Savannah (GA)',	state: 'GA',	price: 155},
    {name: 'Scranton (PA)',	state: 'NJ',	price: 280},
    {name: 'Seatle (WA)',	state: 'CA',	price: 650},
    {name: 'Seatle South (WA)',	state: 'CA',	price: 700},
    {name: 'Shady Spring (WV)',	state: 'NJ',	price: 555},
    {name: 'Shreveport (LA)',	state: 'TX',	price: 330},
    {name: 'Sioux Falls (SD)',	state: 'NJ',	price: 870},
    {name: 'South Bend (IN)',	state: 'NJ',	price: 580},
    {name: 'Southern New Jersey (NJ)',	state: 'NJ',	price: 230},
    {name: 'Speciality Division (IL)',	state: 'NJ',	price: 500},
    {name: 'Spokane (WA)',	state: 'CA',	price: 750},
    {name: 'Springfield (MO)',	state: 'NJ',	price: 680},
    {name: 'St. Louis (IL)',	state: 'NJ',	price: 530},
    {name: 'Suffolk (VA)',	state: 'NJ',	price: 455},
    {name: 'Syracuse (NY)',	state: 'NJ',	price: 350},
    {name: 'Tampa (FL)',	state: 'FL',	price: 270},
    {name: 'Tampa North (FL)',	state: 'GA',	price: 305},
    {name: 'Taunton (MA)',	state: 'NJ',	price: 330},
    {name: 'Templeton (MA)',	state: 'NJ',	price: 380},
    {name: 'Tidewater (VA)',	state: 'NJ',	price: 370},
    {name: 'Tifton (GA)',	state: 'GA',	price: 280},
    {name: 'Tucson (AZ)',	state: 'CA',	price: 430},
    {name: 'Tulsa (OK)',	state: 'TX',	price: 430},
    {name: 'Western Colorado (CO)',	state: 'CA',	price: 680},
    {name: 'White Plains (MD)',	state: 'NJ',	price: 330},
    {name: 'Wichita (KS)',	state: 'TX',	price: 530},
    {name: 'Wilmington (NC)',	state: 'GA',	price: 305},
    {name: 'York Springs (PA)',	state: 'NJ',	price: 330},
];
const year = [
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
    2003,
    2002,
    2001,
    2000,
    1999,
    1998,
    1997,
    1996,
    1995,
    1994,
    1993,
    1992,
    1991,
    1990,
    1989,
    1988,
    1987,
    1986,
    1985,
    1984,
    1983,
    1982,
    1981,
    1980,
    1979,
    1978,
    1977,
    1976,
    1975,
    1974,
    1973,
    1972,
    1971,
    1970,
    1969,
    1968,
    1967,
    1966,
    1965,
    1964,
    1963,
    1962,
    1961,
    1960,
    1959,
    1958,
    1957,
    1956,
    1955,
    1954,
    1953,
    1952,
];
const volume = [
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1.0,
    1.1,
    1.2,
    1.3,
    1.4,
    1.5,
    1.6,
    1.7,
    1.8,
    1.9,
    2.0,
    2.1,
    2.2,
    2.3,
    2.4,
    2.5,
    2.6,
    2.7,
    2.8,
    2.9,
    3.0,
    3.1,
    3.2,
    3.3,
    3.4,
    3.5,
    3.6,
    3.7,
    3.8,
    3.9,
    4.0,
    4.1,
    4.2,
    4.3,
    4.4,
    4.5,
    4.6,
    4.7,
    4.8,
    4.9,
    5.0,
    5.1,
    5.2,
    5.3,
    5.4,
    5.5,
    5.6,
    5.7,
    5.8,
    5.9,
    6.0,
    6.1,
    6.2,
    6.3,
    6.4,
    6.5,
    6.6,
    6.7,
    6.8,
    6.9,
    7.0,
    7.1,
    7.2,
    7.3,
    7.4,
    7.5,
    7.6,
    7.7,
    7.8,
    7.9,
];
const Fr = [
    {name: 'TX',	price: 780},
    {name: 'FL',	price: 620},
    {name: 'GA',	price: 620},
    {name: 'CA',	price: 880},
    {name: 'NJ',	price: 620},
];

const copartAs = [
    {min:0.01, max: 49.99, percent: false,	summ: 25.00, fixed: 30},
    {min:50.00, max: 99.99, percent: false,	summ: 45.00, fixed: 30},
    {min:100.00, max: 199.99, percent: false,	summ: 80.00, fixed: 30},
    {min:200.00, max: 299.99, percent: false,	summ: 120.00, fixed: 30},
    {min:300.00, max: 349.99, percent: false,	summ: 120.00, fixed: 30},
    {min:350.00, max: 399.99, percent: false,	summ: 120.00, fixed: 30},
    {min:400.00, max: 449.99, percent: false,	summ: 160.00, fixed: 30},
    {min:450.00, max: 499.99, percent: false,	summ: 160.00, fixed: 30},
    {min:500.00, max: 549.99, percent: false,	summ: 185.00, fixed: 30},
    {min:550.00, max: 599.99, percent: false,	summ: 185.00, fixed: 30},
    {min:600.00, max: 699.99, percent: false,	summ: 210.00, fixed: 30},
    {min:700.00, max: 799.99, percent: false,	summ: 230.00, fixed: 30},
    {min:800.00, max: 899.99, percent: false,	summ: 250.00, fixed: 30},
    {min:900.00, max: 999.99, percent: false,	summ: 275.00, fixed: 30},
    {min:1000.00, max: 1199.99, percent: false,	summ: 325.00, fixed: 30},
    {min:1200.00, max: 1299.99, percent: false,	summ: 350.00, fixed: 30},
    {min:1300.00, max: 1399.99, percent: false,	summ: 365.00, fixed: 30},
    {min:1400.00, max: 1499.99, percent: false,	summ: 380.00, fixed: 30},
    {min:1500.00, max: 1599.99, percent: false,	summ: 390.00, fixed: 30},
    {min:1600.00, max: 1699.99, percent: false,	summ: 410.00, fixed: 30},
    {min:1700.00, max: 1799.99, percent: false,	summ: 420.00, fixed: 30},
    {min:1800.00, max: 1999.99, percent: false,	summ: 440.00, fixed: 30},
    {min:2000.00, max: 2399.99, percent: false,	summ: 470.00, fixed: 30},
    {min:2400.00, max: 2499.99, percent: false,	summ: 480.00, fixed: 30},
    {min:2500.00, max: 2999.99, percent: false,	summ: 500.00, fixed: 30},
    {min:3000.00, max: 3499.99, percent: false,	summ: 600.00, fixed: 30},
    {min:3500.00, max: 3999.99, percent: false,	summ: 650.00, fixed: 30},
    {min:4000.00, max: 4499.99, percent: false,	summ: 675.00, fixed: 30},
    {min:4500.00, max: 4999.99, percent: false,	summ: 700.00, fixed: 30},
    {min:5000.00, max: 5999.99, percent: false,	summ: 725.00, fixed: 30},
    {min:6000.00, max: 7499.99, percent: false,	summ: 750.00, fixed: 30},
    {min:7500.00, max: 9999.99, percent: false,	summ: 775.00, fixed: 30},
    {min:10000.00, max: 14999.99, percent: false,	summ: 800.00, fixed: 30},
    {min:15000.00, max: 19999.99, percent: true,	summ: 7 , fixed: 30},
    {min:20000.00, max: 24999.99, percent: true,	summ: 7 , fixed: 30},
    {min:25000.00, max: 29999.99, percent: true,	summ: 7 , fixed: 30},
    {min:30000.00, max: 34999.99, percent: true,	summ: 7 , fixed: 30},
    {min:35000.00, max: 10000000.00, percent: true,	summ: 7 , fixed: 30},
];
const copartAs1 = [
    {min: 0.00, max: 99.99, summ: 0},
    {min: 100.00, max: 499.99, summ: 39},
    {min: 500.00, max: 999.99, summ: 49},
    {min: 1000.00, max: 1499.99, summ: 69},
    {min: 1500.00, max: 1999.99, summ: 79},
    {min: 2000.00, max: 3999.99, summ: 89},
    {min: 4000.00, max: 5999.99, summ: 99},
    {min: 6000.00, max: 7999.99, summ: 119},
    {min: 8000.00, max: 10000000.00, summ: 129},
];

const iaaiAs = [
    {min:0.00, max: 99.99, percent: false,	summ: 1.00, fixed: 94, summ2: 0},
    {min:100.00, max: 199.99, percent: false,	summ: 40.00, fixed: 94, summ2: 0},
    {min:200.00, max: 299.99, percent: false,	summ: 60.00, fixed: 94, summ2: 0},
    {min:300.00, max: 349.99, percent: false,	summ: 75.00, fixed: 94, summ2: 0},
    {min:350.00, max: 399.99, percent: false,	summ: 90.00, fixed: 94, summ2: 0},
    {min:400.00, max: 449.99, percent: false,	summ: 100.00, fixed: 94, summ2: 0},
    {min:450.00, max: 499.99, percent: false,	summ: 100.00, fixed: 94, summ2: 0},
    {min:500.00, max: 549.99, percent: false,	summ: 130.00, fixed: 94, summ2: 0},
    {min:550.00, max: 599.99, percent: false,	summ: 130.00, fixed: 94, summ2: 0},
    {min:600.00, max: 699.99, percent: false,	summ: 145.00, fixed: 94, summ2: 0},
    {min:700.00, max: 799.99, percent: false,	summ: 160.00, fixed: 94, summ2: 0},
    {min:800.00, max: 899.99, percent: false,	summ: 175.00, fixed: 94, summ2: 0},
    {min:900.00, max: 999.99, percent: false,	summ: 190.00, fixed: 94, summ2: 0},
    {min:1000.00, max: 1099.99, percent: false,	summ: 205.00, fixed: 94, summ2: 0},
    {min:1100.00, max: 1199.99, percent: false,	summ: 220.00, fixed: 94, summ2: 0},
    {min:1200.00, max: 1299.99, percent: false,	summ: 230.00, fixed: 94, summ2: 0},
    {min:1300.00, max: 1399.99, percent: false,	summ: 240.00, fixed: 94, summ2: 0},
    {min:1400.00, max: 1499.99, percent: false,	summ: 255.00, fixed: 94, summ2: 0},
    {min:1500.00, max: 1599.99, percent: false,	summ: 270.00, fixed: 94, summ2: 0},
    {min:1600.00, max: 1699.99, percent: false,	summ: 290.00, fixed: 94, summ2: 0},
    {min:1700.00, max: 1799.99, percent: false,	summ: 300.00, fixed: 94, summ2: 0},
    {min:1800.00, max: 1999.99, percent: false,	summ: 310.00, fixed: 94, summ2: 0},
    {min:2000.00, max: 2199.99, percent: false,	summ: 325.00, fixed: 94, summ2: 0},
    {min:2200.00, max: 2399.99, percent: false,	summ: 330.00, fixed: 94, summ2: 0},
    {min:2400.00, max: 2499.99, percent: false,	summ: 345.00, fixed: 94, summ2: 0},
    {min:2500.00, max: 2999.99, percent: false,	summ: 360.00, fixed: 94, summ2: 0},
    {min:3000.00, max: 3499.99, percent: false,	summ: 400.00, fixed: 94, summ2: 0},
    {min:3500.00, max: 3999.99, percent: false,	summ: 450.00, fixed: 94, summ2: 0},
    {min:4000.00, max: 4499.99, percent: false,	summ: 475.00, fixed: 94, summ2: 0},
    {min:4500.00, max: 4999.99, percent: false,	summ: 500.00, fixed: 94, summ2: 0},
    {min:5000.00, max: 5999.99, percent: false,	summ: 525.00, fixed: 94, summ2: 0},
    {min:6000.00, max: 7499.99, percent: false,	summ: 550.00, fixed: 94, summ2: 0},
    {min:7500.00, max: 19999.99, percent: true,	summ: 1, fixed: 94, summ2: 500},
    {min:20000.00, max: 99999999999.99, percent: true,	summ: 4, fixed: 94, summ2: 0},
];
const iaaiAs1 = [
    {min: 0.00, max: 99.99, summ: 0},
    {min: 100.00, max: 499.99, summ: 29},
    {min: 500.00, max: 999.99, summ: 39},
    {min: 1000.00, max: 1499.99, summ: 59},
    {min: 1500.00, max: 1999.99, summ: 69},
    {min: 2000.00, max: 3999.99, summ: 79},
    {min: 4000.00, max: 5999.99, summ: 89},
    {min: 6000.00, max: 7999.99, summ: 99},
    {min: 8000.00, max: 1000000000.00, summ: 119},
];


export default class App extends React.Component{
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            auctionSite: [],
            auctionSiteChoosed: "0||0||0",
            auctionName: '',
            state: '',
            Si: 0,
            year: 0,
            fuelType: '',
            volume: 0,
            buttonCost: 0,
            servicesCost: 0,
            serviceCommission: 0,
            //
            As: 0,
            TrT: 500,
            TrTUsa: 0,
            insurance: 0,
            SiTotal: 0,

            Ts: 0,
            Bs: 0,
            Kv: 0,
            Ob: 0,

            Po: 0,
            Ak: 0,
            TsTotal: 0,

            Fr: 0,
            Tr: 0,

            S: 0,

            // //Стоимость конечная для клиента: S = St + Tr + Kom + Kn
            // S: 0,
            // //Стоимость растаможки легковое авто (St):
            // //St =Ts*Po/100+Ak+(Ts+Po+Ak)*20/100
            // //
            // //Ts - таможенная стоимость = Si+As+TrT
            // Ts: 0,
            // // Si - стоимость инвойса
            // Si: 0,
            // //As -аукционный сбор
            // As: 0,
            // //TrT -транспорт до Одессы для таможни = (500$)
            // TrT: 500,
            //
            // //Po - пошлина 10% от Ts
            // Po: 0,
            // //Ak акциз Bs*Ob*Kv
            // Ak: 0,
            // //Nds НДС 20% от суммы (Ts+Po+Ak)
            // Nds: 0,
            //
            // // For Ak
            // //	Bs - базовая ставка акцизного сбора
            // // бенз до 3000 см3	50 Евро
            // // бенз свыше 3000 см3	100 Евро
            // // дизель до 3500 см3	75 Евро
            // // дизель свыше 3500 см3	150 Евро
            // //
            // // 	Kv -коефициент возраста авто (вносится в поле пользователем)
            // // старше 15 лет = 	15
            // // 15 лет 	14
            // // 14 лет	13
            // // …
            // // 3 года	2
            // // не более 2 лет	1
            // // 1 год	1
            // //
            // // 	Ob - обьем двигателя в см3 (выбирается из выпадающего окна либо колесо прокрутки)
            // Bs: 0,
            // Ob: 0,
            // Kv: 0,
            //
            // //Транспорт до Одессы для клиента (Tr):
            // //
            // // Равен сумме (Du) + фрахт (Fr)
            // //
            // // Du -  доставка по США	таблица 1 (пришлю отдельно)
            // // Fr - фрахт	таблица 2 (пришлю отдельно)
            // //
            // //
            // // Комплекс в порту Украина (Kom)	650$
            // //
            // // Комиссия обслуживания (Kn)	вносится в поле пользователем
            // Tr: 0,
            // Du: 0,
            // Fr: 0,
            // Kom: 650,
            // Kn: 0,
        };
    }
    componentDidMount() {

    }
    handle = (type, e) => {
        // console.log(this.state);
        switch (type) {
            case 'auction':
                this.calcState(
                    e.target.value,
                    this.state.auctionSiteChoosed,
                    this.state.Si,
                    this.state.year,
                    this.state.fuelType,
                    this.state.volume,
                    this.state.buttonCost,
                    this.state.servicesCost,
                    this.state.serviceCommission,
                );
                // if (e.target.value === 'copart'){
                //     this.setState({auctionSite: copart, As: this.getCopartAs(this.state.Si), auctionName: e.target.value});
                // }else if (e.target.value === 'iaai'){
                //     this.setState({auctionSite: iaai, As: this.getIaaiAs(this.state.Si), auctionName: e.target.value});
                // }
                return;
            case 'auctionSiteChoosed':
                this.calcState(
                    this.state.auctionName,
                    e.target.value,
                    this.state.Si,
                    this.state.year,
                    this.state.fuelType,
                    this.state.volume,
                    this.state.buttonCost,
                    this.state.servicesCost,
                    this.state.serviceCommission,
                );
                // const TrTUsa = e.target.value.split('||')[0];
                // const state = e.target.value.split('||')[1];
                // const fr = this.getFr(e.target.value.split('||')[1]);
                // const Tr = this.getTr(TrTUsa, fr);
                // this.setState({
                //     TrTUsa: TrTUsa,
                //     state: state,
                //     Fr: fr,
                //     Tr: Tr,
                //     S: this.getS(
                //         this.state.St,
                //         Tr,
                //         this.state.buttonCost,
                //         this.state.servicesCost,
                //         this.state.serviceCommission,
                //         this.state.insurance,
                //         this.state.As
                //     )
                // });
                return;
            case 'Si':
                this.calcState(
                    this.state.auctionName,
                    this.state.auctionSiteChoosed,
                    e.target.value,
                    this.state.year,
                    this.state.fuelType,
                    this.state.volume,
                    this.state.buttonCost,
                    this.state.servicesCost,
                    this.state.serviceCommission,
                );
                // let As = 0;
                // if (this.state.auctionName === 'copart'){
                //     As = this.getCopartAs(e.target.value);
                // }else if (this.state.auctionName === 'iaai'){
                //     As = this.getIaaiAs(e.target.value);
                // }
                // this.setState({
                //     Si: e.target.value,
                //     As: As,
                //     insurance: this.getInsurance(e.target.value),
                //     SiTotal: this.getSiTotal(e.target.value, this.state.TrTUsa, this.state.TrT),
                //     Ts: this.getTs(e.target.value, this.state.As),
                //     Po: this.getPo(e.target.value, this.state.As),
                //     St: this.getSt(this.getTs(e.target.value, this.state.As), this.getPo(e.target.value, this.state.As), this.state.Ak),
                //     TsTotal: this.getTsTotal(e.target.value, this.state.As, this.state.TrT),
                //     S: this.getS(
                //         this.getSt(this.getTs(e.target.value, this.state.As), this.getPo(e.target.value, this.state.As), this.state.Ak),
                //         this.state.Tr,
                //         this.state.buttonCost,
                //         this.state.servicesCost,
                //         this.state.serviceCommission,
                //         this.getInsurance(e.target.value),
                //         As
                //     )
                // });
                return;
            case 'year':
                this.calcState(
                    this.state.auctionName,
                    this.state.auctionSiteChoosed,
                    this.state.Si,
                    e.target.value,
                    this.state.fuelType,
                    this.state.volume,
                    this.state.buttonCost,
                    this.state.servicesCost,
                    this.state.serviceCommission,
                );
                // this.setState({
                //     year: e.target.value,
                //     Kv: this.getKv(calculateAge(e.target.value)) ,
                //     Ak: this.getAk(this.state.Bs, this.state.Ob, this.getKv(calculateAge(e.target.value))),
                //     St: this.getSt( this.state.Ts, this.state.Po , this.getAk(this.state.Bs, this.state.Ob, this.getKv(calculateAge(e.target.value)))),
                //     S: this.getS(
                //         this.getSt( this.state.Ts, this.state.Po , this.getAk(this.state.Bs, this.state.Ob, this.getKv(calculateAge(e.target.value)))),
                //         this.state.Tr,
                //         this.state.buttonCost,
                //         this.state.servicesCost,
                //         this.state.serviceCommission,
                //         this.state.insurance,
                //         this.state.As
                //     )
                // });
                return;
            case 'fuelType':
                this.calcState(
                    this.state.auctionName,
                    this.state.auctionSiteChoosed,
                    this.state.Si,
                    this.state.year,
                    e.target.value,
                    this.state.volume,
                    this.state.buttonCost,
                    this.state.servicesCost,
                    this.state.serviceCommission,
                );
                // this.setState({
                //     fuelType: e.target.value,
                //     Bs: this.getBs(e.target.value, this.state.volume),
                //     Ak: this.getAk(this.getBs(e.target.value, this.state.volume), this.state.Ob, this.state.Kv),
                //     St: this.getSt( this.state.Ts, this.state.Po , this.getAk(this.getBs(e.target.value, this.state.volume), this.state.Ob, this.state.Kv)),
                //     S: this.getS(
                //         this.getSt( this.state.Ts, this.state.Po , this.getAk(this.getBs(e.target.value, this.state.volume), this.state.Ob, this.state.Kv)),
                //         this.state.Tr,
                //         this.state.buttonCost,
                //         this.state.servicesCost,
                //         this.state.serviceCommission,
                //         this.state.insurance,
                //         this.state.As
                //     )
                // });
                return;
            case 'volume':
                this.calcState(
                    this.state.auctionName,
                    this.state.auctionSiteChoosed,
                    this.state.Si,
                    this.state.year,
                    this.state.fuelType,
                    e.target.value,
                    this.state.buttonCost,
                    this.state.servicesCost,
                    this.state.serviceCommission,
                );
                // this.setState({
                //     volume: e.target.value,
                //     Bs: this.getBs(this.state.fuelType, e.target.value),
                //     Ob: parseFloat(e.target.value) * 1000,
                //     Ak: this.getAk(this.getBs(this.state.fuelType, e.target.value), parseFloat(e.target.value) * 1000, this.state.Kv),
                //     St: this.getSt( this.state.Ts, this.state.Po , this.getAk(this.getBs(this.state.fuelType, e.target.value), parseFloat(e.target.value) * 1000, this.state.Kv)),
                //     S: this.getS(
                //         this.getSt( this.state.Ts, this.state.Po , this.getAk(this.getBs(this.state.fuelType, e.target.value), parseFloat(e.target.value) * 1000, this.state.Kv)),
                //         this.state.Tr,
                //         this.state.buttonCost,
                //         this.state.servicesCost,
                //         this.state.serviceCommission,
                //         this.state.insurance,
                //         this.state.As
                //     )
                // });
                return;
            case 'buttonCost':
                this.calcState(
                    this.state.auctionName,
                    this.state.auctionSiteChoosed,
                    this.state.Si,
                    this.state.year,
                    this.state.fuelType,
                    this.state.volume,
                    e.target.value,
                    this.state.servicesCost,
                    this.state.serviceCommission,
                );
                // this.setState({
                //     buttonCost: e.target.value,
                //     S: this.getS(
                //         this.state.St,
                //         this.state.Tr,
                //         e.target.value,
                //         this.state.servicesCost,
                //         this.state.serviceCommission,
                //         this.state.insurance,
                //         this.state.As
                //     )
                // });
                return;
            case 'servicesCost':
                this.calcState(
                    this.state.auctionName,
                    this.state.auctionSiteChoosed,
                    this.state.Si,
                    this.state.year,
                    this.state.fuelType,
                    this.state.volume,
                    this.state.buttonCost,
                    e.target.value,
                    this.state.serviceCommission,
                );
                // this.setState({
                //     servicesCost: e.target.value,
                //     S: this.getS(
                //         this.state.St,
                //         this.state.Tr,
                //         this.state.buttonCost,
                //         e.target.value,
                //         this.state.serviceCommission,
                //         this.state.insurance,
                //         this.state.As
                //     )
                // });
                return;
            case 'serviceCommission':
                this.calcState(
                    this.state.auctionName,
                    this.state.auctionSiteChoosed,
                    this.state.Si,
                    this.state.year,
                    this.state.fuelType,
                    this.state.volume,
                    this.state.buttonCost,
                    this.state.servicesCost,
                    e.target.value,
                );
                // this.setState({
                //     serviceCommission: e.target.value,
                //     S: this.getS(
                //         this.state.St,
                //         this.state.Tr,
                //         this.state.buttonCost,
                //         this.state.servicesCost,
                //         e.target.value,
                //         this.state.insurance,
                //         this.state.As
                //     )
                // });
                return;
            default:
                return;
        }
    };
    calcState = (auction, auctionSiteChoosed, Si, year, fuelType, volume, buttonCost, servicesCost, serviceCommission) => {
        let auctionSite = [];
        let As = 0;
        let auctionName = '';
        if (auction === 'copart'){
            auctionSite = copart;
            As = this.getCopartAs(Si);
            auctionName = auction;
        }else if (auction === 'iaai'){
            auctionSite = iaai;
            As = this.getIaaiAs(Si);
            auctionName = auction;
        }
        const TrTUsa = auctionSiteChoosed.split('||')[0];
        const state = auctionSiteChoosed.split('||')[1];
        const fr = this.getFr(state);
        console.log(state);
        console.log(fr);
        const Tr = this.getTr(TrTUsa, fr);

        let Kv = this.getKv(calculateAge(year));
        let Bs = this.getBs(fuelType, volume);
        let Ob = parseFloat(volume) * 1000;
        let Ak = this.getAk(Bs, Ob, Kv);

        let insurance = this.getInsurance(Si);
        let SiTotal = this.getSiTotal(Si, TrTUsa, this.state.TrT);
        let Ts = this.getTs(Si, As);
        let Po = this.getPo(Si, As);
        let St = this.getSt(Ts, Po, Ak);
        let TsTotal = this.getTsTotal(Si, As, this.state.TrT);
        let S = this.getS(
            Si,
            As,
            Tr,
            buttonCost,
            servicesCost,
            serviceCommission,
            insurance,
            St
        );

        const res ={
            auctionSiteChoosed: auctionSiteChoosed,
            auctionSite: auctionSite,
            As: As,
            auctionName: auctionName,
            TrTUsa: TrTUsa,
            state: state,
            Fr: fr,
            Tr: Tr,
            Kv: Kv,
            Bs: Bs,
            Ob: Ob,
            Ak: Ak,
            insurance: insurance,
            Si: Si,
            year: year,
            fuelType: fuelType,
            volume: volume,
            SiTotal: SiTotal,
            Ts: Ts,
            Po: Po,
            St: St,
            TsTotal: TsTotal,
            S: S,
            buttonCost: buttonCost,
            servicesCost: servicesCost,
            serviceCommission: serviceCommission,
        };
        this.setState(res);
        console.log(res)
    };
    getCopartAs = (value) => {
        value = parseFloat(value);
        let res = 0;
        copartAs.forEach( (c, index) => {
            // console.log(c)
            if (value>= c.min && value <= c.max){
                if (c.percent){
                    res = res + (value * c.summ / 100) + c.fixed
                }else {
                    res = res + c.summ + c.fixed
                }
            }
        });
        copartAs1.forEach( (c, index) => {
            if (value>= c.min && value <= c.max){
                res = res + c.summ;
            }
        });
        return res;
    };
    getIaaiAs = (value) => {
        value = parseFloat(value);
        let res = 0;
        iaaiAs.forEach( (c, index) => {
            // console.log(c)
            if (value>= c.min && value <= c.max){
                if (c.percent){
                    res = res + (value * c.summ / 100) + c.fixed + c.summ2
                }else {
                    res = res + c.summ + c.fixed
                }
            }
        });
        iaaiAs1.forEach( (c, index) => {
            if (value>= c.min && value <= c.max){
                res = res + c.summ;
            }
        });
        return res;
    };
    getBs = (fuelType, volume) => {
        if (fuelType === 'Бензин'){
            if (parseFloat(volume) <= 3){
                return 50 * kroosCurse;
            }else {
                return 100 * kroosCurse;
            }
        }else if (fuelType === 'Дизель'){
            if (parseFloat(volume) <= 3.5){
                return 75 * kroosCurse;
            }else {
                return 150 * kroosCurse;
            }
        }else {
            return 0;
        }
    };
    getKv = (year) => {
        if (year <=2 ){
            return 1;
        }else if (year > 15){
            return 15
        }else {
            return parseInt(year) - 1
        }
    };
    getSiTotal = (Si, TrTUsa, TrT) => {
        return parseFloat(Si) + (parseFloat(Si) * insurancePercent /100) + parseFloat(TrTUsa) + parseFloat(TrT)
    };
    getInsurance = (Si) => {
        return parseFloat(Si) * insurancePercent /100;
    };
    getTs = (Si, As) => {
        return parseFloat(Si) + parseFloat(As) + 400;
    };
    getPo = (Si, As) => {
        return (parseFloat(Si) + parseFloat(As) + 400)/10;
    };
    getTsTotal = (Si, As, Trt) => {
        return parseFloat(Si) + parseFloat(As) + parseFloat(Trt);
    };
    getFr = (state) => {
        let res = 0;
        Fr.forEach( fr => {
            if (fr.name === state){
                res = fr.price;
            }
        });
        return res;
    };
    getTr = (Du, Fr) => {
        return  parseFloat(Du) + parseFloat(Fr);
    };
    getAk = (Bs, Ob, Kv) => {
        console.log('Bs=' + Bs + '*Ob=' + parseFloat(Ob)/1000 + '*Kv=' + Kv )
        return parseFloat(Bs) * (parseFloat(Ob)/1000) * parseFloat(Kv);
    };

    getSt = (Ts, Po, Ak) => {
        //St =Ts*Po/100+Ak+(Ts+Po+Ak)*20/100
        // console.log('St = ' + Ts +'*'+ Po + '/100+' + Ak + '+('+ Ts +'+'+ Po +'+'+ Ak +')*20/100');
        return (
            parseFloat(Po) +
            parseFloat(Ak) +
            parseFloat((parseFloat(parseFloat(Ts)+parseFloat(Po)+parseFloat(Ak))*20/100))

    );
    };
    getS = (Si, As, Tr, buttonCost, servicesCost, serviceCommission, insurance, St) => {
        // console.log('St=' + St + ' + Tr=' + Tr + ' + buttonCost=' + buttonCost + ' + servicesCost=' + servicesCost + ' + serviceCommission=' + serviceCommission)
        return  parseFloat(Si) + parseFloat(As) + parseFloat(Tr) + parseFloat(buttonCost) + parseFloat(servicesCost) + parseFloat(serviceCommission) + parseFloat(insurance)+ parseFloat(St) ;
    };
    /** ====================================================================================================
     *              Render
     =====================================================================================================*/
    render(){
        return (
            <div className={"CalcPage"}>
                <Row className={"CalcPageHeaders"}>
                    <Col>
                        <h2>Расчет автомобиля на 2021 год</h2>
                        <div className={"CalcPageHeaders2"}>Данный раздел для расчета примерной стоимости автомобиля.</div>
                        {/*<h4 className={"CalcPageHeaders2"}>Рассчитывается примерная стоимость автомобиля.</h4>*/}
                        <br/>
                    </Col>
                </Row>

                <Row>
                    {/*<Col md={4}>*/}
                    {/*    <div className={"Formula"}>Аукцион, штат</div>*/}
                    {/*    <div>{'auctionSiteChoosed = ' + this.state.auctionSiteChoosed}</div>*/}
                    {/*    <div>{'auctionName = ' + this.state.auctionName}</div>*/}
                    {/*    <div>{'state = ' + this.state.state}</div>*/}
                    {/*    <div className={"Formula"}>As -аукционный сбор из таблички в зависимости от аукциона (скину отдельно)</div>*/}
                    {/*    <div>{'As = ' + this.state.As}</div>*/}
                    {/*    <div className={"Formula"}>Tr - Равен сумме (Du) + фрахт (Fr)</div>*/}
                    {/*    <div>{'Tr = ' + this.state.Tr}</div>*/}
                    {/*    <div>{'Du = ' + this.state.TrTUsa}</div>*/}
                    {/*    <div>{'Fr = ' + this.state.Fr}</div>*/}
                    {/*    <div>{'TrT = ' + this.state.TrT}</div>*/}
                    {/*    <div className={"Formula"}>Kv , Bs , Ob</div>*/}
                    {/*    <div>{'Kv = ' + this.state.Kv}</div>*/}
                    {/*    <div>{'Bs = ' + this.state.Bs}</div>*/}
                    {/*    <div>{'Ob = ' + this.state.Ob}</div>*/}
                    {/*    <div className={"Formula"}>Ak = Bs*(Ob/100)*Kv</div>*/}
                    {/*    <div>{'Ak = ' + this.state.Ak}</div>*/}
                    {/*    <div className={"Formula"}>10% от Ts</div>*/}
                    {/*    <div>{'Po = ' + this.state.Po}</div>*/}
                    {/*    <div className={"Formula"}>Cтоимость инвойса (Si)</div>*/}
                    {/*    <div>{'Si = ' + this.state.Si}</div>*/}
                    {/*    <div>{'Страховка = ' + this.state.insurance}</div>*/}
                    {/*    <div>{'SiTotal = ' + this.state.SiTotal}</div>*/}
                    {/*    <div className={"Formula"}>St = Po+Ak+(Ts+Po+Ak)*20/100</div>*/}
                    {/*    <div>{'St = ' + this.state.St}</div>*/}
                    {/*    <div className={"Formula"}>Ts = Si+As+TrT</div>*/}
                    {/*    <div>{'Ts = ' + this.state.Ts}</div>*/}
                    {/*    <div>{'TsTotal = ' + this.state.TsTotal}</div>*/}
                    {/*    <div className={"Formula"}>S = Si + As + Tr + Kom + Kn + Доп услуги + страховка</div>*/}
                    {/*    <div>{'S = ' + this.state.S}</div>*/}
                    {/*    <div className={"Formula"}>Введенные данные</div>*/}
                    {/*    <div>{'year = ' + this.state.year}</div>*/}
                    {/*    <div>{'fuelType = ' + this.state.fuelType}</div>*/}
                    {/*    <div>{'volume = ' + this.state.volume}</div>*/}
                    {/*    <div>{'Дополнительная комиссия = ' + this.state.buttonCost}</div>*/}
                    {/*    <div>{'Стоимость услу = ' + this.state.servicesCost}</div>*/}
                    {/*    <div>{'Комиссия обслуживания = ' + this.state.serviceCommission}</div>*/}

                    {/*</Col>*/}
                    <Col md={6}>
                        <Form.Group controlId="2">
                            <Form.Label>Выберите аукцион:</Form.Label>
                            <Form.Control as="select" onChange={this.handle.bind(this, 'auction')}>
                                <option key={0}>Не выбран</option>
                                {aukcion.map( (a, index) => (
                                    <option key={index}>{a}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="8">
                            <Form.Label>Выберите площадку аукциона:</Form.Label>
                            <Form.Control as="select" onChange={this.handle.bind(this, 'auctionSiteChoosed')}>
                                <option key={0}>Не выбран</option>
                                {this.state.auctionSite.map( (a, index) => (
                                    <option key={index} value={a.price + '||' + a.state}>{a.name + " (" + a.state + ') ' + a.price + '$'}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="3">
                            <Form.Label>Введите цену покупки с аукциона:</Form.Label>
                            <Form.Control type="number" placeholder="Введите цену" value={this.state.Si} onChange={this.handle.bind(this, 'Si')}/>
                        </Form.Group>
                        <Form.Group controlId="33">
                            <Form.Label>Выберите год выпуска автомобиля:</Form.Label>
                            <Form.Control as="select" onChange={this.handle.bind(this, 'year')}>
                                <option key={0}>Не выбран</option>
                                {year.map( (y, index) => (
                                    <option key={index}>{y}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="22">
                            <Form.Label>Выберите тип топлива автомобиля:</Form.Label>
                            <Form.Control as="select" onChange={this.handle.bind(this, 'fuelType')}>
                                <option key={0}>Не выбран</option>
                                <option key={1}>Бензин</option>
                                <option key={2}>Дизель</option>
                                <option key={3}>Электро</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="44">
                            <Form.Label>Выберите обьем двигателя Автомобиля:</Form.Label>
                            <Form.Control as="select" onChange={this.handle.bind(this, 'volume')}>
                                <option key={0}>Не выбран</option>
                                {volume.map( (v, index) =>(
                                    <option key={index}>{v}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="10">
                            <Form.Label>Дополнительная комиссия (Сублот, AL,MI,WI. Bill of sale):</Form.Label>
                            <Form.Control type="number" placeholder="Введите стоимость" value={this.state.buttonCost} onChange={this.handle.bind(this, 'buttonCost')}/>
                        </Form.Group>
                        <Form.Group controlId="88">
                            <Form.Label>Укажите стоимость услуг:</Form.Label>
                            <Form.Control type="number" placeholder="Введите стоимость" value={this.state.servicesCost} onChange={this.handle.bind(this, 'servicesCost')}/>
                        </Form.Group>
                        <Form.Group controlId="99">
                            <Form.Label>Комиссия обслуживания:</Form.Label>
                            <Form.Control type="number" placeholder="Введите комиссию" value={this.state.serviceCommission} onChange={this.handle.bind(this, 'serviceCommission')}/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="4">
                            <Form.Label>Комиссия аукциона:</Form.Label>
                            <Form.Control readOnly type="number" placeholder="Заполните все поля" value={this.state.As} />
                        </Form.Group>
                        <Form.Group controlId="9">
                            <Form.Label>Цена доставки до порта Одесса:</Form.Label>
                            <Form.Control readOnly type="number" placeholder="Заполните все поля" value={this.state.Tr} />
                        </Form.Group>
                        {/*<Form.Group controlId="9">*/}
                        {/*    <Form.Label>Цена доставки до порта США:</Form.Label>*/}
                        {/*    <Form.Control readOnly type="number" placeholder="Введите дату" value={this.state.TrTUsa} />*/}
                        {/*</Form.Group>*/}
                        <Form.Group controlId="11">
                            <Form.Label>Страховка:</Form.Label>
                            <Form.Control readOnly type="number" placeholder="Заполните все поля" value={this.state.insurance} />
                        </Form.Group>
                        <Form.Group controlId="5">
                            <Form.Label>Цена лота всего:</Form.Label>
                            <Form.Control readOnly type="number" placeholder="Заполните все поля" value={(parseFloat(this.state.Si) + parseFloat(this.state.As))} />
                        </Form.Group>
                        <Form.Group controlId="55">
                            <Form.Label>Таможенная стоимость (стоимость лота + 400$):</Form.Label>
                            <Form.Control readOnly type="number" placeholder="Заполните все поля" value={(parseFloat(this.state.Si) + parseFloat(this.state.As) + 400)} />
                        </Form.Group>
                        <Form.Group controlId="66">
                            <Form.Label>Таможенные платежи всего:</Form.Label>
                            <Form.Control readOnly type="number" placeholder="Заполните все поля" value={this.state.St} />
                        </Form.Group>
                        {/*<Form.Group controlId="65556">*/}
                        {/*    <Form.Label>Стоимость растаможки авто:</Form.Label>*/}
                        {/*    <Form.Control readOnly type="number" placeholder="Заполните все поля" value={this.state.St} />*/}
                        {/*</Form.Group>*/}
                        <Form.Group controlId="101">
                            <Form.Label>Итого с растаможкой в порту Одесса:</Form.Label>
                            <Form.Control readOnly type="number" placeholder="Заполните все поля" value={this.state.S} />
                        </Form.Group>




                        {/*<Form.Group controlId="6">*/}
                        {/*    <Form.Label>Выберите тип кузова:</Form.Label>*/}
                        {/*    <Form.Control as="select" >*/}
                        {/*        <option key={0}>Не выбран</option>*/}
                        {/*        <option key={1}>Седан</option>*/}
                        {/*        <option key={2}>Кроссовер</option>*/}
                        {/*    </Form.Control>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group controlId="7">*/}
                        {/*    <Form.Label>Выберите Штат:</Form.Label>*/}
                        {/*    <Form.Control as="select" onChange={this.handle.bind(this, 'state')}>*/}
                        {/*        <option key={0}>Не выбран</option>*/}
                        {/*        {state.map( (s, index) => (*/}
                        {/*            <option key={index}>{s}</option>*/}
                        {/*        ))}*/}
                        {/*    </Form.Control>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group controlId="77">*/}
                        {/*    <Form.Label>Выберите услуги:</Form.Label>*/}
                        {/*    <Form.Control as="select" onChange={this.handle.bind(this, 'serviceType')}>*/}
                        {/*        <option key={0}>Экспедиторские услуги и брокерские услуги</option>*/}
                        {/*        <option key={1}>Экспедиторские услуги</option>*/}
                        {/*    </Form.Control>*/}
                        {/*</Form.Group>*/}
                    </Col>
                </Row>
            </div>
        );
    }
}
