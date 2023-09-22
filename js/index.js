
var dssv = [];
function themSV(){

    var maSV = document.querySelector('#txtMaSV').value;
    var tenSV = document.querySelector('#txtTenSV').value;
    var email = document.querySelector('#txtEmail').value;
    var matKhau = document.querySelector('#txtPass').value;
    var toan = document.querySelector('#txtDiemToan').value*1;
    var ly = document.querySelector('#txtDiemLy').value*1;
    var hoa = document.querySelector('#txtDiemHoa').value*1;

    var sv = new SinhVien(maSV, tenSV, email, matKhau, toan, ly, hoa);
    return sv;

    var content = ``
    for(let i = 0; i< dssv.length; i++){
        var sv = dssv[i];
        var string = `<tr>
                        <td>${sv.maSV}</td>
                        <td>${sv.tenSV}</td>
                        <td>${sv.email}</td>
                        <td>0</td>
                        </tr>`
            content += string;
    }
    document.querySelector('#tbodySinhVien').innerHTML = `contentHTML`;
}
