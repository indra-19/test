function table() {
    const items = [
        {tahun: "1992-1993", juara: "Manchester United", runnerUp: "Aston Villa"},
        {tahun: "1993-1994", juara: "Manchester United", runnerUp: "Blackburn Rovers"},
        {tahun: "1994-1995", juara: "Blackburn Rovers", runnerUp: "Manchester United"},
        {tahun: "1995-1996", juara: "Manchester United", runnerUp: "Newcastle United"},
        {tahun: "1996-1997", juara: "Manchester United", runnerUp: "Newcastle United"},
        {tahun: "1997-1998", juara: "Arsenal", runnerUp: "Manchester United"},
        {tahun: "1998-1999", juara: "Manchester United", runnerUp: "Arsenal"},
        {tahun: "1999-2000", juara: "Manchester United", runnerUp: "Arsenal"},
        {tahun: "2000-2001", juara: "Manchester United", runnerUp: "Arsenal"},
        {tahun: "2001-2002", juara: "Arsenal", runnerUp: "Liverpool"},
        {tahun: "2002-2003", juara: "Manchester United", runnerUp: "Arsenal"},
        {tahun: "2003-2004", juara: "Arsenal", runnerUp: "Chelsea"},
        {tahun: "2004-2005", juara: "Chelsea", runnerUp: "Arsenal"},
        {tahun: "2005-2006", juara: "Chelsea", runnerUp: "Manchester United"},
        {tahun: "2006-2007", juara: "Manchester United", runnerUp: "Chelsea"},
        {tahun: "2007-2008", juara: "Manchester United", runnerUp: "Chelsea"},
        {tahun: "2008-2009", juara: "Manchester United", runnerUp: "Liverpool"},
        {tahun: "2009-2010", juara: "Chelsea", runnerUp: "Manchester United"},
        {tahun: "2010-2011", juara: "Manchester United", runnerUp: "Chelsea"},
        {tahun: "2011-2012", juara: "Manchester City", runnerUp: "Manchester United"},
        {tahun: "2012-2013", juara: "Manchester United", runnerUp: "Manchester City"},
        {tahun: "2013-2014", juara: "Manchester City", runnerUp: "Liverpool"},
        {tahun: "2014-2015", juara: "Chelsea", runnerUp: "Manchester City"},
        {tahun: "2015-2016", juara: "Leicester City", runnerUp: "Arsenal"},
        {tahun: "2016-2017", juara: "Chelsea", runnerUp: "Tottenham Hotspur"},
        {tahun: "2017-2018", juara: "Manchester City", runnerUp: "Manchester United"},
        {tahun: "2018-2019", juara: "Manchester City", runnerUp: "Liverpool"},
        {tahun: "2019-2020", juara: "Liverpool", runnerUp: "Manchester City"},
        {tahun: "2020-2021", juara: "Manchester City", runnerUp: "Manchester United"},
        {tahun: "2021-2022", juara: "Manchester City", runnerUp: "Liverpool"}
    ];
    
    let daftar = document.querySelector("#daftar");

    for (let item of items) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + item.tahun + "</td>";
        row.innerHTML += "<td>" + item.juara + "</td>";
        row.innerHTML += "<td>" + item.runnerUp + "</td>";
  
  
        daftar.appendChild(row);
    }
}

table();
