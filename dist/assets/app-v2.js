const STORAGE_KEY='salescost-pro-v11-expense-linked-documents';
const CURRENT_USER='Trần Diệu Hương';
const CURRENT_ROLE='Quản trị viên';
const navItems=[
 ['dashboard','▦','Tổng quan'],['master','◫','Dữ liệu gốc'],['expenses','💳','Doanh thu'],['registrations','⇄','Chi phí'],['documents','📁','Tài liệu'],['reports','📊','Báo cáo'],['settings','⚙','Cấu hình']
];
const seed={
 brands:[
  {id:'TH-HADAY',name:'Haday',company:'Công ty TNHH Haday Việt Nam',category:'Gia vị & thực phẩm',owner:'Phòng Kinh doanh',status:'Đang hoạt động'},
  {id:'TH-HFD',name:'Haday Food',company:'Công ty TNHH Haday Việt Nam',category:'Thực phẩm đóng gói',owner:'Trade Marketing',status:'Đang hoạt động'},
  {id:'TH-MKT',name:'Nhãn hàng thử nghiệm',company:'Công ty TNHH Haday Việt Nam',category:'Sản phẩm mới',owner:'Phòng Marketing',status:'Tạm ngừng'}
 ],
 discounts:[
  {id:'CK-DS-08',name:'Chiết khấu doanh số tháng 8',target:'Nhà phân phối cấp 1',condition:'Doanh số từ 300 triệu',value:'3% – 5%',owner:'Phòng Kinh doanh',status:'Đang áp dụng'},
  {id:'CK-TT-03',name:'Chiết khấu thanh toán sớm',target:'Toàn bộ đại lý',condition:'Thanh toán trong 7 ngày',value:'1,5%',owner:'Phòng Tài chính',status:'Đang áp dụng'},
  {id:'CK-TB-12',name:'Hỗ trợ trưng bày tiêu chuẩn',target:'Đại lý trọng điểm',condition:'Đủ hình ảnh nghiệm thu',value:'2.000.000 ₫/điểm',owner:'Trade Marketing',status:'Đang áp dụng'},
  {id:'CK-MK-02',name:'Thưởng mở mới khách hàng',target:'Đại lý mới',condition:'Đơn đầu từ 50 triệu',value:'3.000.000 ₫',owner:'Kinh doanh miền Bắc',status:'Sắp hết hạn'}
 ],
 programs:[
  {id:'CT-2026-018',name:'Trưng bày mùa hè miền Nam',type:'Trưng bày',owner:'Nguyễn Minh Anh',period:'01/08 – 31/08/2026',budget:320000000,status:'Đang thực hiện'},
  {id:'CT-2026-017',name:'Thưởng doanh số quý III',type:'Thưởng doanh số',owner:'Trần Hoàng Long',period:'01/07 – 30/09/2026',budget:580000000,status:'Đang thực hiện'},
  {id:'CT-2026-016',name:'Mở mới đại lý khu vực Bắc',type:'Mở mới khách hàng',owner:'Lê Thùy Dương',period:'15/07 – 15/08/2026',budget:180000000,status:'Chờ đối soát'},
  {id:'CT-2026-015',name:'Hỗ trợ hội nghị khách hàng',type:'Hội nghị',owner:'Phạm Tuấn Kiệt',period:'05/07 – 10/07/2026',budget:240000000,status:'Đã hoàn thành'}
 ],
 salesTargets:[
  {id:'MT-08-01',employee:'Nguyễn Minh Anh',department:'Kinh doanh miền Nam',month:'Tháng 8/2026',target:1250000000,actual:1080000000},
  {id:'MT-08-02',employee:'Trần Hoàng Long',department:'Kinh doanh miền Bắc',month:'Tháng 8/2026',target:1100000000,actual:980000000},
  {id:'MT-08-03',employee:'Lê Thùy Dương',department:'Kinh doanh miền Trung',month:'Tháng 8/2026',target:850000000,actual:720000000},
  {id:'MT-08-04',employee:'Phạm Tuấn Kiệt',department:'Kinh doanh toàn quốc',month:'Tháng 8/2026',target:1450000000,actual:1510000000}
 ],
 expenses:[
  {id:'CP-2026-204',name:'Chi phí hỗ trợ trưng bày tháng 8',ref:'CT-2026-018',department:'Kinh doanh miền Nam',amount:168000000,status:'Chờ đăng ký'},
  {id:'CP-2026-203',name:'Thưởng mở mới 12 đại lý',ref:'CT-2026-016',department:'Kinh doanh miền Bắc',amount:36000000,status:'Đã đăng ký'},
  {id:'CP-2026-202',name:'Hội nghị khách hàng Đà Nẵng',ref:'CT-2026-015',department:'Kinh doanh miền Trung',amount:236000000,status:'Chờ thanh toán'},
  {id:'CP-2026-201',name:'Chiết khấu thanh toán tháng 7',ref:'CK-TT-03',department:'Kinh doanh toàn quốc',amount:398000000,status:'Đã thanh toán'}
 ],
 documents:[
  {id:'HS-1001',name:'Biên bản nghiệm thu trưng bày - NPP Minh Phát.pdf',type:'Biên bản nghiệm thu',expenseType:'Hội chợ',ref:'CT-2026-018',updated:'03/08/2026',status:'Đã kiểm tra',completedDocs:5},
  {id:'HS-1002',name:'Bảng đối soát doanh số Q3 - Miền Bắc.xlsx',type:'Bảng đối soát',expenseType:'Thưởng nhà phân phối',ref:'CT-2026-017',updated:'02/08/2026',status:'Chờ kiểm tra',completedDocs:3},
  {id:'HS-1003',name:'Phụ lục hợp đồng chiết khấu 2026.pdf',type:'Phụ lục hợp đồng',expenseType:'Chiết khấu nhà phân phối',ref:'CK-DS-08',updated:'28/07/2026',status:'Đã kiểm tra',completedDocs:4},
  {id:'HS-1004',name:'Hình ảnh trưng bày - Đại lý An Khang.zip',type:'Hình ảnh minh chứng',expenseType:'Hội chợ',ref:'CT-2026-018',updated:'01/08/2026',status:'Thiếu thông tin',completedDocs:4}
 ],
 approvals:[
  {id:'QT-NS-0812',type:'Ngân sách',name:'Ngân sách tháng 9/2026',requester:'Nguyễn Minh Anh',department:'Kinh doanh miền Nam',category:'Chiết khấu nhà phân phối',periodType:'Tháng',month:9,year:2026,managerApprover:'Nguyễn Văn Nam',financeApprover:'Trần Thu Hà',amount:1200000000,usedAmount:0,status:'Chờ phê duyệt',approvalStep:0,approvalTotal:2},
  {id:'QT-DCNS-0813',type:'Điều chỉnh ngân sách',name:'Điều chỉnh tăng ngân sách tháng 8/2026',requester:'Trần Diệu Hương',department:'Bộ phận Kinh doanh',category:'Hội chợ',periodType:'Tháng',month:8,year:2026,adjustmentType:'Tăng ngân sách',budgetRef:'NS-T08-2026',reason:'Bổ sung ngân sách hội chợ cuối tháng',managerApprover:'Nguyễn Văn Nam',financeApprover:'Trần Thu Hà',amount:150000000,usedAmount:0,status:'Chờ phê duyệt',approvalStep:1,approvalTotal:2},
  {id:'QT-CKPP-0811',type:'Chiết khấu nhà phân phối',budgetRef:'NS-HM-CKPP-T08-2026',category:'Chiết khấu nhà phân phối',periodType:'Tháng',month:8,year:2026,name:'Chiết khấu doanh số NPP quý III',requester:'Trần Hoàng Long',managerApprover:'Phạm Quốc Huy',financeApprover:'Lê Mai Anh',amount:280000000,status:'Chờ phê duyệt',approvalStep:1,approvalTotal:2},
  {id:'QT-CKBH-0810',type:'Chiết khấu bán hàng',budgetRef:'NS-HM-CKBH-T08-2026',category:'Chiết khấu bán hàng',periodType:'Tháng',month:8,year:2026,name:'Chiết khấu bán hàng tháng 8',requester:'Lê Thùy Dương',managerApprover:'Nguyễn Văn Nam',financeApprover:'Trần Thu Hà',amount:168000000,status:'Đã phê duyệt',approvalStep:2,approvalTotal:2},
  {id:'QT-TNPP-0809',type:'Thưởng nhà phân phối',budgetRef:'NS-HM-TNPP-Q3-2026',category:'Thưởng nhà phân phối',periodType:'Quý',quarter:3,year:2026,name:'Thưởng NPP đạt chỉ tiêu quý II',requester:'Phạm Tuấn Kiệt',managerApprover:'Phạm Quốc Huy',financeApprover:'Lê Mai Anh',amount:360000000,status:'Đang thực hiện',approvalStep:2,approvalTotal:2},
  {id:'QT-HC-0808',type:'Hội chợ',budgetRef:'NS-HM-HC-T08-2026',category:'Hội chợ',periodType:'Tháng',month:8,year:2026,name:'Tham gia hội chợ Vietfood 2026',requester:'Hoàng Ngọc Mai',managerApprover:'Nguyễn Văn Nam',financeApprover:'Trần Thu Hà',amount:245000000,status:'Chờ bổ sung tài liệu',approvalStep:2,approvalTotal:2},
  {id:'QT-HC-0807',type:'Hội chợ',budgetRef:'NS-HM-HC-Q2-2026',category:'Hội chợ',periodType:'Quý',quarter:2,year:2026,name:'Hội chợ sản phẩm miền Bắc',requester:'Vũ Thanh Hà',managerApprover:'Phạm Quốc Huy',financeApprover:'Lê Mai Anh',amount:185000000,status:'Hoàn thành',approvalStep:2,approvalTotal:2}
 ],
 budgets:[
  {id:'NS-2026-SOUTH',name:'Ngân sách miền Nam',planned:4200000000,approved:3900000000,used:2750000000,owner:'Kinh doanh miền Nam'},
  {id:'NS-2026-NORTH',name:'Ngân sách miền Bắc',planned:3600000000,approved:3350000000,used:2210000000,owner:'Kinh doanh miền Bắc'},
  {id:'NS-2026-CENTRAL',name:'Ngân sách miền Trung',planned:2200000000,approved:2050000000,used:1260000000,owner:'Kinh doanh miền Trung'}
 ],
 categoryBudgets:[
  {id:'NS-HM-CKPP-T08-2026',department:'Kinh doanh miền Nam',category:'Chiết khấu nhà phân phối',periodType:'Tháng',month:8,year:2026,approved:520000000,used:280000000,status:'Đang thực hiện'},
  {id:'NS-HM-CKBH-T08-2026',department:'Kinh doanh miền Nam',category:'Chiết khấu bán hàng',periodType:'Tháng',month:8,year:2026,approved:260000000,used:168000000,status:'Đang thực hiện'},
  {id:'NS-HM-HC-T08-2026',department:'Bộ phận Kinh doanh',category:'Hội chợ',periodType:'Tháng',month:8,year:2026,approved:300000000,used:245000000,status:'Đang thực hiện'},
  {id:'NS-HM-TNPP-Q3-2026',department:'Kinh doanh miền Bắc',category:'Thưởng nhà phân phối',periodType:'Quý',quarter:3,year:2026,approved:700000000,used:360000000,status:'Đang thực hiện'},
  {id:'NS-HM-HC-Q2-2026',department:'Kinh doanh miền Bắc',category:'Hội chợ',periodType:'Quý',quarter:2,year:2026,approved:260000000,used:185000000,status:'Đã chốt'},
  {id:'NS-HM-CKPP-N2026',department:'Kinh doanh toàn quốc',category:'Chiết khấu nhà phân phối',periodType:'Năm',year:2026,approved:2400000000,used:1120000000,status:'Đang thực hiện'}
 ],
 monthlyBudgets:[
  {id:'NS-T01-2026',month:1,year:2026,planned:850000000,approved:820000000,used:480000000,status:'Đã chốt'},
  {id:'NS-T02-2026',month:2,year:2026,planned:900000000,approved:870000000,used:520000000,status:'Đã chốt'},
  {id:'NS-T03-2026',month:3,year:2026,planned:980000000,approved:940000000,used:580000000,status:'Đã chốt'},
  {id:'NS-T04-2026',month:4,year:2026,planned:1050000000,approved:1010000000,used:630000000,status:'Đã chốt'},
  {id:'NS-T05-2026',month:5,year:2026,planned:1080000000,approved:1040000000,used:660000000,status:'Đã chốt'},
  {id:'NS-T06-2026',month:6,year:2026,planned:1020000000,approved:980000000,used:590000000,status:'Đã chốt'},
  {id:'NS-T07-2026',month:7,year:2026,planned:1150000000,approved:1100000000,used:730000000,status:'Đã chốt'},
  {id:'NS-T08-2026',month:8,year:2026,planned:1200000000,approved:1150000000,used:680000000,status:'Đang thực hiện'},
  {id:'NS-T09-2026',month:9,year:2026,planned:1100000000,approved:1050000000,used:0,status:'Chưa thực hiện'},
  {id:'NS-T10-2026',month:10,year:2026,planned:1050000000,approved:1000000000,used:0,status:'Chưa thực hiện'},
  {id:'NS-T11-2026',month:11,year:2026,planned:980000000,approved:940000000,used:0,status:'Chưa thực hiện'},
  {id:'NS-T12-2026',month:12,year:2026,planned:1040000000,approved:990000000,used:0,status:'Chưa thực hiện'}
 ],
 master:{customers:128,products:64,employees:42,regions:3,costTypes:18,documentTypes:12}
};
let state=load();let current='dashboard';
const app=document.getElementById('app'),nav=document.getElementById('nav'),pageTitle=document.getElementById('pageTitle'),sidebar=document.getElementById('sidebar');
function load(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));if(!saved)return structuredClone(seed);return {...structuredClone(seed),...saved,monthlyBudgets:Array.isArray(saved.monthlyBudgets)?saved.monthlyBudgets:structuredClone(seed.monthlyBudgets),categoryBudgets:Array.isArray(saved.categoryBudgets)?saved.categoryBudgets:structuredClone(seed.categoryBudgets)}}catch{return structuredClone(seed)}}
function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
const money=v=>new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0}).format(v);
function badge(s){let c=s.includes('Đã')?'green':s.includes('Thiếu')||s.includes('Sắp')?'orange':s.includes('Chờ')?'yellow':'blue';return `<span class="status ${c}">${s}</span>`}
function table(headers,rows){return (isBudget?categoryBudgetTable():'')+`<div class="panel table-wrap"><div class="toolbar"><div class="toolbar-left"><button class="chip active">Tất cả</button><button class="chip">Đang xử lý</button><button class="chip">Đã hoàn thành</button></div></div><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.join(''):`<tr><td colspan="99" class="empty">Chưa có dữ liệu</td></tr>`}</tbody></table></div>`}
function summary(items){return `<div class="summary panel">${items.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div>`}
function dashboard(){const month=state.monthlyBudgets.find(x=>x.month===8&&x.year===2026)||state.monthlyBudgets[0];const pending=state.approvals.filter(x=>x.status==='Chờ phê duyệt');const annual={budget:12800000000,approved:8460000000,used:6920000000};annual.remaining=annual.budget-annual.used;annual.pending=pending.reduce((sum,x)=>sum+x.amount,0);const monthly={budget:month.planned,approved:month.approved,used:month.used,remaining:month.planned-month.used,pending:210000000};const metric=(icon,label,value,note)=>`<div class="card"><div class="icon">${icon}</div><label>${label}</label><strong>${money(value)}</strong><small>${note}</small></div>`;return `<div class="hero"><div><small>THÁNG 8/2026</small><h2>Chào buổi sáng, Diệu Hương</h2><p>Bạn có <b>${pending.length} đề nghị</b> đang chờ phê duyệt và <b>${state.documents.filter(x=>x.status.includes('Thiếu')).length} tài liệu</b> cần bổ sung.</p></div><button class="btn" onclick="go('registrations')">Xem việc cần xử lý →</button></div>
<div class="budget-kpi-board">
 <div class="budget-kpi-row"><div class="budget-row-label"><span>◎</span><b>NGÂN SÁCH<br>NĂM 2026</b></div>${metric('▣','Ngân sách',annual.budget,'Tăng 8,2% so với 2025')}${metric('✓','Đã phê duyệt',annual.approved,'66,1% tổng ngân sách')}${metric('↗','Đã sử dụng',annual.used,'54,1% tổng ngân sách')}${metric('◉','Còn lại',annual.remaining,'45,9% tổng ngân sách')}${metric('◷','Chờ phê duyệt',annual.pending,`${pending.length} đề nghị đang chờ`)}</div>
 <div class="budget-kpi-row"><div class="budget-row-label"><span>▣</span><b>NGÂN SÁCH<br>THÁNG 8/2026</b></div>${metric('▣','Ngân sách',monthly.budget,'Kế hoạch tháng 8')}${metric('✓','Đã phê duyệt',monthly.approved,`${Math.round(monthly.approved/monthly.budget*100)}% ngân sách tháng`)}${metric('↗','Đã sử dụng',monthly.used,`${Math.round(monthly.used/monthly.budget*100)}% ngân sách tháng`)}${metric('◉','Còn lại',monthly.remaining,`${Math.round(monthly.remaining/monthly.budget*100)}% ngân sách tháng`)}${metric('◷','Chờ phê duyệt',monthly.pending,'Đề nghị trong tháng')}</div>
</div>
<div class="grid-2"><div class="panel"><div class="panel-head"><div><h3>Chi phí theo tháng</h3><p>Đơn vị: triệu đồng</p></div><button class="link-btn" onclick="go('master')">Xem trong dữ liệu gốc →</button></div><div class="bars">${state.monthlyBudgets.map((x,i)=>{const v=Math.round(x.used/1000000);return `<div class="bar" style="height:${Math.max(v/8,3)}%"><em>${v>0?v:''}</em><span>T${i+1}</span></div>`}).join('')}</div></div><div class="panel"><div class="panel-head"><div><h3>Phân bổ chi phí</h3><p>Theo nhóm chi phí</p></div></div><div class="donut-wrap"><div class="donut"><div><strong>6,92</strong><small>tỷ đồng</small></div></div><div class="legend"><p><i style="background:#0f766e"></i>Chiết khấu <b>42%</b></p><p><i style="background:#5798c8"></i>Chương trình <b>31%</b></p><p><i style="background:#8b73c4"></i>Hỗ trợ thị trường <b>17%</b></p><p><i style="background:#d7a84a"></i>Khác <b>10%</b></p></div></div></div></div>
<div class="grid-2"><div class="panel"><div class="panel-head"><div><h3>Chương trình đang thực hiện</h3><p>Theo dõi tiến độ và ngân sách</p></div></div>${state.programs.slice(0,3).map(x=>`<div class="activity"><div class="act-icon">📣</div><div class="grow"><b>${x.name}</b><small>${x.id} · ${x.period}</small></div><b>${money(x.budget)}</b></div>`).join('')}</div><div class="panel"><div class="panel-head"><div><h3>Cảnh báo tài liệu</h3><p>Cần xử lý trong tuần</p></div></div>${[['⚠','Tài liệu còn thiếu',state.documents.filter(x=>x.status.includes('Thiếu')).length],['◷','Chờ kiểm tra',state.documents.filter(x=>x.status.includes('Chờ')).length],['✓','Đã hoàn thiện',state.documents.filter(x=>x.status.includes('Đã')).length]].map(x=>`<div class="activity"><div class="act-icon">${x[0]}</div><div class="grow"><b>${x[1]}</b><small>Nhấn để xem danh sách tài liệu</small></div><b>${x[2]}</b></div>`).join('')}</div></div>`}
function master(){const monthRows=state.monthlyBudgets.map(x=>{const remain=x.approved-x.used,rate=x.approved?Math.round(x.used/x.approved*100):0;return `<tr><td><b>Tháng ${x.month}/${x.year}</b><span>${x.id}</span></td><td>${money(x.planned)}</td><td><b>${money(x.approved)}</b></td><td>${money(x.used)}</td><td><b>${money(remain)}</b></td><td>${rate}%</td></tr>`});return `<h3 class="section-title">Chương trình bán hàng</h3>${programs()}<div class="section-gap"></div><h3 class="section-title">Ngân sách theo tháng</h3>${table(['Tháng','Kế hoạch','Đã đăng ký','Đã sử dụng','Còn lại','Tỷ lệ sử dụng'],monthRows)}`}
function discounts(){return table(['Chính sách','Đối tượng','Điều kiện','Mức chiết khấu','Phụ trách','Trạng thái',''],state.discounts.map(x=>`<tr><td><b>${x.name}</b><span>${x.id}</span></td><td>${x.target}</td><td>${x.condition}</td><td><b>${x.value}</b></td><td>${x.owner}</td><td>${badge(x.status)}</td><td><button class="link-btn danger" onclick="removeItem('discounts','${x.id}')">Xóa</button></td></tr>`))}
function programs(){return table(['Chương trình','Loại','Phụ trách','Thời gian','Ngân sách','Trạng thái'],state.programs.map(x=>`<tr><td><b>${x.name}</b><span>${x.id}</span></td><td>${x.type}</td><td>${x.owner}</td><td>${x.period}</td><td><b>${money(x.budget)}</b></td><td>${badge(x.status)}</td></tr>`))}
function budget(){const annualPlanned=state.budgets.reduce((s,x)=>s+x.planned,0),annualApproved=state.budgets.reduce((s,x)=>s+x.approved,0),annualUsed=state.budgets.reduce((s,x)=>s+x.used,0);const max=Math.max(...state.monthlyBudgets.map(x=>x.approved),1);return summary([['Kế hoạch năm',money(annualPlanned)],['Đã đăng ký',money(annualApproved)],['Đã sử dụng',money(annualUsed)],['Còn lại',money(annualApproved-annualUsed)]])+`<div class="panel monthly-panel"><div class="panel-head"><div><h3>Ngân sách theo tháng</h3><p>So sánh ngân sách được đăng ký và số tiền đã sử dụng trong năm 2026</p></div><button class="btn primary" onclick="openMonthlyBudgetModal()">＋ Thêm ngân sách tháng</button></div><div class="monthly-chart">${state.monthlyBudgets.map(x=>{const approved=Math.round(x.approved/max*100),used=Math.round(x.used/max*100);return `<div class="month-col"><div class="month-values"><span>${Math.round(x.approved/1000000)}</span><b>${x.used?Math.round(x.used/1000000):0}</b></div><div class="month-bars"><i style="height:${approved}%"></i><em style="height:${used}%"></em></div><small>T${x.month}</small></div>`}).join('')}</div><div class="chart-key"><span><i class="approved-key"></i>Ngân sách đăng ký</span><span><i class="used-key"></i>Đã sử dụng</span><small>Đơn vị: triệu đồng</small></div></div>`+table(['Tháng','Kế hoạch','Đăng ký','Đã sử dụng','Còn lại','Tỷ lệ sử dụng','Trạng thái',''],state.monthlyBudgets.map(x=>{const remain=x.approved-x.used,rate=x.approved?Math.round(x.used/x.approved*100):0;return `<tr><td><b>Tháng ${x.month}/${x.year}</b><span>${x.id}</span></td><td>${money(x.planned)}</td><td><b>${money(x.approved)}</b></td><td>${money(x.used)}</td><td><b>${money(remain)}</b></td><td><div class="usage"><div><i style="width:${Math.min(rate,100)}%"></i></div><b>${rate}%</b></div></td><td>${badge(x.status)}</td><td><button class="link-btn danger" onclick="removeItem('monthlyBudgets','${x.id}')">Xóa</button></td></tr>`})) + `<div class="section-gap"></div>` + `<h3 class="section-title">Ngân sách theo khu vực</h3>` + table(['Ngân sách','Bộ phận','Kế hoạch','Đăng ký','Đã sử dụng','Còn lại'],state.budgets.map(x=>`<tr><td><b>${x.name}</b><span>${x.id}</span></td><td>${x.owner}</td><td>${money(x.planned)}</td><td><b>${money(x.approved)}</b></td><td>${money(x.used)}</td><td><b>${money(x.approved-x.used)}</b></td></tr>`))}
let salesReportMode='targets';
function setSalesReportMode(mode){salesReportMode=mode;go('expenses')}
function revenueApprovalTimeline(employee,status){
 const approved=status!=='Tạo mới'&&status!=='Chờ phê duyệt';
 return `<div class="approval-mini"><div class="approval-person"><span>●</span><div><b>Người tạo đơn</b><small>${employee} · Đã tạo</small></div></div><div class="approval-person"><span>${approved?'✓':'○'}</span><div><b>Trưởng bộ phận</b><small>Nguyễn Văn Nam · ${approved?'Đã phê duyệt':'Chờ phê duyệt'}</small></div></div><div class="approval-person"><span>${approved?'✓':'○'}</span><div><b>Tài vụ</b><small>Trần Thu Hà · ${approved?'Đã phê duyệt':'Chưa đến lượt'}</small></div></div></div>`;
}
function revenueTargetRecords(){
 const targets=Array.isArray(state.salesTargets)&&state.salesTargets.length?state.salesTargets:seed.salesTargets;
 return targets.map((x,i)=>({...x,status:i===0?'Chờ phê duyệt':i===1?'Đang thực hiện':i===2?'Đã phê duyệt':'Hoàn thành'}));
}
function revenueTargetView(){
 const records=revenueTargetRecords();
 const totalTarget=records.reduce((s,x)=>s+Number(x.target||0),0);
 const totalActual=records.reduce((s,x)=>s+Number(x.actual||0),0);
 const completion=totalTarget?Math.round(totalActual/totalTarget*100):0;
 const rows=records.map(x=>{const pct=x.target?Math.round(x.actual/x.target*100):0;return `<tr><td><b>Doanh thu mục tiêu ${x.month}</b><span>${x.id}</span></td><td><b>${x.department}</b><span>${x.employee}</span></td><td>${revenueApprovalTimeline(x.employee,x.status)}</td><td><b>${money(x.target)}</b><span>Thực hiện ${money(x.actual)} · ${pct}%</span></td><td>${badge(x.status)}</td><td><button class="action-btn ${x.status==='Chờ phê duyệt'?'primary':'subtle'}" onclick="showToast('${x.status==='Chờ phê duyệt'?'Đã xử lý phê duyệt':'Đã mở chi tiết mục tiêu'}')">${x.status==='Chờ phê duyệt'?'Phê duyệt':'Xem chi tiết'}</button></td></tr>`}).join('');
 return summary([['Tạo mới',0],['Chờ phê duyệt',records.filter(x=>x.status==='Chờ phê duyệt').length],['Đang thực hiện',records.filter(x=>x.status==='Đang thực hiện').length],['Hoàn thành',records.filter(x=>x.status==='Hoàn thành').length]])+`<div class="panel table-wrap"><div class="toolbar"><div class="toolbar-left"><button class="chip active">Tất cả</button><button class="chip">Tháng</button><button class="chip">Quý</button><button class="chip">Năm</button></div><button class="btn primary" onclick="openRevenueTargetModal()">＋ Tạo doanh thu mục tiêu</button></div><table><thead><tr><th>Nội dung</th><th>Bộ phận / Người phụ trách</th><th>Luồng người xử lý</th><th>Doanh thu mục tiêu</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function salesReportView(){
 const records=revenueTargetRecords();
 const total=records.reduce((s,x)=>s+Number(x.actual||0),0);
 const target=records.reduce((s,x)=>s+Number(x.target||0),0);
 const rows=records.map((x,i)=>{const pct=x.target?Math.round(x.actual/x.target*100):0;const status=pct>=100?'Hoàn thành':i===0?'Chờ phê duyệt':'Đang thực hiện';return `<tr><td><b>Báo cáo bán hàng ${x.month}</b><span>BC-${x.id}</span></td><td><b>${x.department}</b><span>${x.employee}</span></td><td>${revenueApprovalTimeline(x.employee,status)}</td><td><b>${money(x.actual)}</b><span>Mục tiêu ${money(x.target)} · ${pct}%</span></td><td>${badge(status)}</td><td><button class="action-btn ${status==='Chờ phê duyệt'?'primary':'subtle'}" onclick="showToast('${status==='Chờ phê duyệt'?'Đã xử lý báo cáo':'Đã mở báo cáo bán hàng'}')">${status==='Chờ phê duyệt'?'Phê duyệt':'Xem chi tiết'}</button></td></tr>`}).join('');
 return summary([['Tạo mới',0],['Chờ phê duyệt',1],['Đang thực hiện',records.filter(x=>x.actual<x.target).length],['Hoàn thành',records.filter(x=>x.actual>=x.target).length]])+`<div class="panel table-wrap"><div class="toolbar"><div class="toolbar-left"><button class="chip active">Tất cả</button><button class="chip">Theo tháng</button><button class="chip">Theo quý</button><button class="chip">Theo năm</button></div><button class="btn primary" onclick="openSalesReportModal()">＋ Tạo báo cáo bán hàng</button></div><table><thead><tr><th>Nội dung</th><th>Bộ phận / Người phụ trách</th><th>Luồng người xử lý</th><th>Doanh thu thực hiện</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function expenses(){
 const statuses=['Tạo mới','Chờ phê duyệt','Đã phê duyệt','Đang thực hiện','Hoàn thành'];
 return `<div class="process-flow">${statuses.map((x,i)=>`<div><span>${i+1}</span><b>${x}</b>${i<statuses.length-1?'<i>→</i>':''}</div>`).join('')}</div><div class="flow-tabs primary-tabs"><button class="flow-tab ${salesReportMode==='targets'?'active':''}" onclick="setSalesReportMode('targets')">Doanh thu mục tiêu</button><button class="flow-tab ${salesReportMode==='report'?'active':''}" onclick="setSalesReportMode('report')">Báo cáo bán hàng</button></div>${salesReportMode==='targets'?revenueTargetView():salesReportView()}`;
}
function revenueTargetItemRow(category='Doanh thu bán hàng',amount='',note=''){
 const cats=['Doanh thu bán hàng','Doanh thu nhà phân phối','Doanh thu khách hàng mới','Doanh thu sản phẩm mới','Doanh thu khác'];
 return `<div class="target-item-row"><div class="field"><label>Hạng mục / Chỉ tiêu<select name="targetItemCategory">${cats.map(x=>`<option ${x===category?'selected':''}>${x}</option>`).join('')}</select></label></div><div class="field"><label>Doanh thu mục tiêu<input name="targetItemAmount" type="number" min="0" value="${amount}" required></label></div><div class="field"><label>Ghi chú<input name="targetItemNote" value="${note}"></label></div><button type="button" class="icon-btn danger" onclick="removeRevenueTargetItem(this)">−</button></div>`;
}
function addRevenueTargetItem(){document.getElementById('revenueTargetItems')?.insertAdjacentHTML('beforeend',revenueTargetItemRow());bindRevenueTargetInputs();updateRevenueTargetTotal()}
function removeRevenueTargetItem(btn){const l=document.getElementById('revenueTargetItems');if(l&&l.children.length<=1){showToast('Phải có ít nhất một hạng mục mục tiêu');return}btn.closest('.target-item-row')?.remove();updateRevenueTargetTotal()}
function bindRevenueTargetInputs(){document.querySelectorAll('#revenueTargetItems input[name="targetItemAmount"]').forEach(x=>x.oninput=updateRevenueTargetTotal)}
function updateRevenueTargetTotal(){const total=[...document.querySelectorAll('#revenueTargetItems input[name="targetItemAmount"]')].reduce((a,x)=>a+Number(x.value||0),0);const v=document.getElementById('revenueTargetTotal');if(v)v.textContent=money(total)}
function updateRevenuePeriod(){const f=document.getElementById('recordForm'),pt=f.querySelector('[name="periodType"]')?.value||'Tháng',box=document.getElementById('revenuePeriodFields');if(!box)return;let html='';if(pt==='Tháng')html=`<div class="field"><label>Tháng<select name="month">${Array.from({length:12},(_,i)=>`<option value="${i+1}" ${i===7?'selected':''}>Tháng ${i+1}</option>`).join('')}</select></label></div><div class="field"><label>Năm<input name="year" type="number" value="2026"></label></div>`;else if(pt==='Quý')html=`<div class="field"><label>Quý<select name="quarter"><option>1</option><option>2</option><option selected>3</option><option>4</option></select></label></div><div class="field"><label>Năm<input name="year" type="number" value="2026"></label></div>`;else html=`<div class="field"><label>Năm<input name="year" type="number" value="2026"></label></div>`;box.innerHTML=html;updateRevenueName()}
function updateRevenueName(){const f=document.getElementById('recordForm');if(!f)return;const pt=f.querySelector('[name="periodType"]')?.value||'Tháng',y=f.querySelector('[name="year"]')?.value||2026,m=f.querySelector('[name="month"]')?.value,q=f.querySelector('[name="quarter"]')?.value;const n=f.querySelector('[name="name"]');if(n)n.value=`Doanh thu mục tiêu ${pt.toLowerCase()} ${pt==='Tháng'?m+'/':''}${pt==='Quý'?'Q'+q+'/':''}${y}`}
function openRevenueTargetModal(){
 window.activeFormKey='revenueTarget';document.getElementById('modalTitle').textContent='Tạo đăng ký doanh thu mục tiêu';document.getElementById('modalHint').textContent='Nhập thông tin chung, các hạng mục mục tiêu và gửi phê duyệt.';
 document.getElementById('recordForm').innerHTML=`<input type="hidden" name="name"><div class="form-block full"><div class="form-section-title">I. Thông tin chung</div><div class="form-grid-inner"><div class="field"><label>Người nộp đơn<select name="employee"><option>Trần Diệu Hương</option><option>Nguyễn Minh Anh</option><option>Trần Hoàng Long</option></select></label></div><div class="field"><label>Bộ phận<input name="department" value="Bộ phận Kinh doanh" readonly></label></div><div class="field"><label>Kỳ doanh thu<select name="periodType"><option>Tháng</option><option>Quý</option><option>Năm</option></select></label></div><div id="revenuePeriodFields" class="period-inline full"></div><div class="field full"><label>Nội dung đăng ký<input name="displayName" readonly></label></div></div></div><div class="form-block full"><div class="form-section-title">II. Thông tin mục tiêu</div><div id="revenueTargetItems" class="target-items-list">${revenueTargetItemRow('Doanh thu bán hàng','','')}</div><div class="items-footer"><button type="button" class="btn subtle" onclick="addRevenueTargetItem()">＋ Thêm hạng mục</button><div><span>Tổng doanh thu mục tiêu</span><strong id="revenueTargetTotal">0 ₫</strong></div></div></div><div class="form-block full"><div class="form-section-title">III. Quy trình phê duyệt</div>${approvalFlowHtml()}</div>`;
 const f=document.getElementById('recordForm');f.querySelector('[name="periodType"]').onchange=updateRevenuePeriod;f.addEventListener('change',updateRevenueName);updateRevenuePeriod();bindRevenueTargetInputs();updateRevenueTargetTotal();document.getElementById('modalBackdrop').style.display='grid'
}
function openSalesReportModal(){window.activeFormKey='salesReport';document.getElementById('modalTitle').textContent='Tạo báo cáo bán hàng';document.getElementById('recordForm').innerHTML=`<div class="field full"><label>Doanh thu mục tiêu liên kết<select name="targetRef">${revenueTargetRecords().map(x=>`<option value="${x.id}">${x.employee} — ${x.month} — ${money(x.target)}</option>`).join('')}</select></label></div><div class="field"><label>Doanh thu thực hiện<input name="actual" type="number" required></label></div><div class="field"><label>Ngày báo cáo<input name="date" type="date" required></label></div><div class="field full"><label>Ghi chú<textarea name="note"></textarea></label></div>`;document.getElementById('modalBackdrop').style.display='grid'}

function isBudgetProcess(x){return ['Ngân sách','Điều chỉnh ngân sách'].includes(x.type)}
function nextApprover(x){return (x.approvalStep||0)===0?x.managerApprover:x.financeApprover}
function canAdminAct(){return CURRENT_ROLE==='Quản trị viên'}
function processActions(x){
 const owner=x.requester===CURRENT_USER||canAdminAct();
 const approver=nextApprover(x)===CURRENT_USER||canAdminAct();
 if(x.status==='Tạo mới'&&owner){
  return `<div class="action-group owner-actions"><button class="action-btn subtle" onclick="editProcess('${x.id}')">Điều chỉnh</button><button class="action-btn danger" onclick="deleteProcess('${x.id}')">Xóa</button><button class="action-btn primary" onclick="submitProcess('${x.id}')">Nộp đơn</button></div>`;
 }
 if(x.status==='Hoàn trả'&&owner){
  return `<div class="action-group owner-actions"><button class="action-btn subtle" onclick="editProcess('${x.id}')">Điều chỉnh</button><button class="action-btn danger" onclick="deleteProcess('${x.id}')">Xóa</button><button class="action-btn primary" onclick="submitProcess('${x.id}')">Nộp lại</button></div>`;
 }
 if(x.status==='Chờ phê duyệt'&&approver){
  return `<div class="action-group approver-actions"><button class="action-btn danger" onclick="rejectProcess('${x.id}')">Từ chối</button><button class="action-btn warning" onclick="returnProcess('${x.id}')">Hoàn trả</button><button class="action-btn primary" onclick="approveProcess('${x.id}')">Phê duyệt</button></div>`;
 }
 if(isBudgetProcess(x)&&x.status==='Đang thực hiện'&&owner){
  return `<button class="action-btn primary" onclick="finishBudget('${x.id}')">Ghi nhận đã sử dụng hết</button>`;
 }
 if(!isBudgetProcess(x)&&x.status==='Đã phê duyệt'&&owner){
  return `<button class="action-btn primary" onclick="advanceProcess('${x.id}')">Bắt đầu thực hiện</button>`;
 }
 if(!isBudgetProcess(x)&&x.status==='Đang thực hiện'&&owner){
  return `<button class="action-btn primary" onclick="advanceProcess('${x.id}')">Đã sử dụng hết chi phí</button>`;
 }
 if(!isBudgetProcess(x)&&x.status==='Chờ bổ sung tài liệu'&&owner){
  return expenseDocumentsComplete(x.id)?`<button class="action-btn primary" onclick="advanceProcess('${x.id}')">Hoàn thành chi phí</button>`:`<button class="action-btn subtle" onclick="go('documents')">Bổ sung/hoàn trả tài liệu</button>`;
 }
 return '<span class="muted">—</span>';
}
function approvalTimeline(x){
 const step=x.approvalStep||0;
 const items=[
  ['Người tạo đơn',x.requester||'—','Đã tạo'],
  ['Trưởng bộ phận',x.managerApprover||'Chưa cấu hình',step>=1||!['Tạo mới','Chờ phê duyệt'].includes(x.status)?'Đã phê duyệt':x.status==='Chờ phê duyệt'?'Chờ phê duyệt':'Chưa gửi'],
  ['Tài vụ',x.financeApprover||'Chưa cấu hình',step>=2||!['Tạo mới','Chờ phê duyệt'].includes(x.status)?'Đã phê duyệt':step===1?'Chờ phê duyệt':'Chưa đến lượt']
 ];
 return `<div class="approval-mini">${items.map((i,n)=>`<div class="approval-person"><span>${n===0?'●':(i[2]==='Đã phê duyệt'?'✓':'○')}</span><div><b>${i[0]}</b><small>${i[1]} · ${i[2]}</small></div></div>`).join('')}</div>`;
}
function budgetPeriodEnd(x){
 const y=Number(x.year||2026);
 if(x.periodType==='Tháng') return new Date(y,Number(x.month||1),0,23,59,59);
 if(x.periodType==='Quý') return new Date(y,Number(x.quarter||1)*3,0,23,59,59);
 return new Date(y,11,31,23,59,59);
}
function syncBudgetStatuses(){
 const now=new Date();let changed=false;
 state.approvals.forEach(x=>{
  if(!['Ngân sách','Điều chỉnh ngân sách'].includes(x.type)||x.status!=='Đang thực hiện')return;
  const exhausted=Number(x.usedAmount||0)>=Number(x.amount||0)&&Number(x.amount||0)>0;
  const expired=now>budgetPeriodEnd(x);
  if(exhausted||expired){x.status='Hoàn thành';x.completionReason=exhausted?'Đã sử dụng hết ngân sách':'Đã hết kỳ ngân sách';changed=true;}
 });
 if(changed)persist();
}

const budgetCategories=['Chiết khấu nhà phân phối','Chiết khấu bán hàng','Thưởng nhà phân phối','Hội chợ','Hỗ trợ thị trường','Khuyến mại','Khác'];
function budgetPeriodLabel(x){if(x.periodType==='Tháng')return `Tháng ${x.month}/${x.year}`;if(x.periodType==='Quý')return `Quý ${x.quarter}/${x.year}`;return `Năm ${x.year}`}
function categoryBudgetRemaining(x){return Math.max(0,Number(x.approved||0)-Number(x.used||0))}
function eligibleBudgets(type){return state.categoryBudgets.filter(x=>x.category===type&&categoryBudgetRemaining(x)>0&&x.status!=='Đã chốt')}
function categoryBudgetTable(){return `<div class="panel table-wrap category-budget-table"><div class="panel-head"><div><h3>Ngân sách theo hạng mục</h3><p>Kiểm soát ngân sách theo bộ phận, kỳ tháng/quý/năm và từng loại chi phí.</p></div></div><table><thead><tr><th>Mã ngân sách</th><th>Bộ phận</th><th>Hạng mục</th><th>Kỳ ngân sách</th><th>Được duyệt</th><th>Đã sử dụng</th><th>Còn lại</th><th>Trạng thái</th></tr></thead><tbody>${state.categoryBudgets.map(x=>`<tr><td><b>${x.id}</b></td><td>${x.department}</td><td><b>${x.category}</b></td><td>${budgetPeriodLabel(x)}</td><td>${money(x.approved)}</td><td>${money(x.used)}</td><td><b>${money(categoryBudgetRemaining(x))}</b></td><td>${badge(x.status)}</td></tr>`).join('')}</tbody></table></div>`}
let registrationFlow='budget';
const expenseTypes=['Chiết khấu nhà phân phối','Chiết khấu bán hàng','Thưởng nhà phân phối','Hội chợ'];
function setRegistrationFlow(flow){registrationFlow=flow;go('registrations')}
function registrations(){
 const statuses=['Tạo mới','Chờ phê duyệt','Đã phê duyệt','Đang thực hiện','Chờ bổ sung tài liệu','Hoàn thành'];
 const isBudget=registrationFlow==='budget';
 const records=state.approvals.filter(x=>isBudget?['Ngân sách','Điều chỉnh ngân sách'].includes(x.type):!['Ngân sách','Điều chỉnh ngân sách'].includes(x.type));
 const types=isBudget?['Tất cả','Ngân sách','Điều chỉnh ngân sách']:['Tất cả',...expenseTypes];
 const rows=records.map(x=>`<tr data-reg-type="${x.type||''}"><td><b>${x.name}</b><span>${x.id}${x.budgetRef?` · ${x.budgetRef}`:''}</span></td><td>${isBudget?`<b>${x.department||'Chưa xác định'}</b><span>${x.category||'Chưa chọn hạng mục'} · ${x.periodType||'Ngân sách'}${x.adjustmentType?` · ${x.adjustmentType}`:''}</span>`:`<b>${x.type||'Khác'}</b><span>${x.budgetRef||'Chưa liên kết ngân sách'}</span>`}</td><td>${approvalTimeline(x)}</td><td><b>${money(x.amount)}</b>${x.reason?`<span>${x.reason}</span>`:''}</td><td>${badge(x.status)}${x.decisionNote?`<span>${x.decisionNote}</span>`:''}</td><td>${processActions(x)}</td></tr>`);
 const cards=isBudget
 ? `<div class="registration-types one-card"><button class="type-card combined-budget-card" onclick="openBudgetUnifiedModal()"><span>◎</span><b>Ngân sách</b><small>＋ Đăng ký mới hoặc điều chỉnh ngân sách</small></button></div>`
 : `<div class="registration-types compact">${expenseTypes.map((x,i)=>`<button class="type-card" onclick="openRegistrationModal('${x}')"><span>${['%','↘','★','◆'][i]}</span><b>${x}</b><small>＋ Tạo đăng ký chi phí</small></button>`).join('')}</div>`;
 const heading=isBudget?'Ngân sách':'Luồng đăng ký chi phí';
 const intro=isBudget?'Quản lý tập trung toàn bộ đề nghị đăng ký mới và điều chỉnh ngân sách trong cùng một danh sách.':'Dùng để đăng ký từng khoản chi theo ngân sách đã được phê duyệt. Mỗi loại chi phí có bộ tài liệu bắt buộc riêng.';
 return `<div class="process-flow">${statuses.map((x,i)=>`<div><span>${i+1}</span><b>${x}</b>${i<statuses.length-1?'<i>→</i>':''}</div>`).join('')}</div>`+
 `<div class="flow-tabs primary-tabs"><button class="flow-tab ${isBudget?'active':''}" onclick="setRegistrationFlow('budget')">Ngân sách</button><button class="flow-tab ${!isBudget?'active':''}" onclick="setRegistrationFlow('expense')">Chi phí</button></div>`+
 summary([['Tạo mới',records.filter(x=>x.status==='Tạo mới').length],['Chờ phê duyệt',records.filter(x=>x.status==='Chờ phê duyệt').length],['Đang thực hiện',records.filter(x=>x.status==='Đang thực hiện').length],['Hoàn thành',records.filter(x=>x.status==='Hoàn thành').length]])+
 `<div class="panel table-wrap"><div class="toolbar"><div class="toolbar-left">${types.map((x,i)=>`<button class="chip ${i===0?'active':''}" onclick="filterRegistration('${x}',this)">${x}</button>`).join('')}</div><button class="btn primary" onclick="${isBudget?'openBudgetUnifiedModal()':`openRegistrationModal('')`}">＋ ${isBudget?'Tạo đăng ký / điều chỉnh':'Tạo đăng ký chi phí'}</button></div><table><thead><tr><th>Nội dung</th><th>${isBudget?'Bộ phận / Kỳ ngân sách':'Loại chi phí'}</th><th>Luồng người xử lý</th><th>Số tiền</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${rows.length?rows.join(''):'<tr><td colspan="6" class="empty">Chưa có dữ liệu</td></tr>'}</tbody></table></div>`
}
function prependBudgetTypeSelector(value='registration'){
 const form=document.getElementById('recordForm');
 if(!form)return;
 const wrap=document.createElement('div');
 wrap.className='field full budget-request-selector';
 wrap.innerHTML=`<label>Loại yêu cầu<select id="budgetRequestType"><option value="registration" ${value==='registration'?'selected':''}>Đăng ký ngân sách mới</option><option value="adjustment" ${value==='adjustment'?'selected':''}>Điều chỉnh ngân sách</option></select></label>`;
 form.prepend(wrap);
 wrap.querySelector('select').onchange=e=>{
   if(e.target.value==='adjustment') openBudgetAdjustmentModal(true);
   else openBudgetRegistrationModal(true);
 };
}
function openBudgetUnifiedModal(){openBudgetRegistrationModal(true)}
function filterRegistration(type,btn){document.querySelectorAll('.toolbar .chip').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('tbody tr[data-reg-type]').forEach(r=>r.style.display=type==='Tất cả'||r.dataset.regType===type?'':'none')}
const requesterDepartments={
 'Trần Diệu Hương':'Bộ phận Kinh doanh',
 'Nguyễn Minh Anh':'Kinh doanh miền Nam',
 'Trần Hoàng Long':'Kinh doanh miền Bắc',
 'Lê Thùy Dương':'Kinh doanh miền Trung'
};
function budgetPeriodFields(){
 const kind=document.querySelector('#recordForm select[name="periodType"]')?.value||'Tháng';
 const wrap=document.getElementById('budgetPeriodFields');
 if(!wrap)return;
 const currentYear=2026;
 if(kind==='Tháng') wrap.innerHTML=`<div class="field"><label>Tháng<select name="month">${Array.from({length:12},(_,i)=>`<option value="${i+1}" ${i+1===8?'selected':''}>Tháng ${i+1}</option>`).join('')}</select></label></div><div class="field"><label>Năm<input name="year" type="number" value="${currentYear}" min="2020" required></label></div>`;
 else if(kind==='Quý') wrap.innerHTML=`<div class="field"><label>Quý<select name="quarter">${[1,2,3,4].map(q=>`<option value="${q}" ${q===3?'selected':''}>Quý ${q}</option>`).join('')}</select></label></div><div class="field"><label>Năm<input name="year" type="number" value="${currentYear}" min="2020" required></label></div>`;
 else wrap.innerHTML=`<div class="field full"><label>Năm ngân sách<input name="year" type="number" value="${currentYear+1}" min="2020" required></label></div>`;
 wrap.querySelectorAll('select,input').forEach(el=>el.addEventListener('change',updateBudgetRegistrationName));
 updateBudgetRegistrationName();
}
function updateBudgetRequester(){
 const requester=document.querySelector('#recordForm select[name="requester"]')?.value||'Trần Diệu Hương';
 const dep=requesterDepartments[requester]||'Bộ phận Kinh doanh';
 const depInput=document.querySelector('#recordForm input[name="department"]');
 if(depInput)depInput.value=dep;
}
function updateBudgetRegistrationName(){
 const f=document.getElementById('recordForm');if(!f)return;
 const kind=f.querySelector('[name="periodType"]')?.value||'Tháng';
 const year=f.querySelector('[name="year"]')?.value||2026;
 let name=`Ngân sách năm ${year}`;
 if(kind==='Tháng')name=`Ngân sách tháng ${f.querySelector('[name="month"]')?.value||1}/${year}`;
 if(kind==='Quý')name=`Ngân sách quý ${f.querySelector('[name="quarter"]')?.value||1}/${year}`;
 const input=f.querySelector('[name="name"]');if(input)input.value=name;
}
function budgetItemRow(category='',amount=''){
 const options=budgetCategories.map(x=>`<option ${x===category?'selected':''}>${x}</option>`).join('');
 return `<div class="budget-item-row"><div class="field"><label>Hạng mục chi phí<select name="budgetItemCategory">${options}</select></label></div><div class="field"><label>Số tiền đề nghị<input name="budgetItemAmount" type="number" min="0" value="${amount}" required></label></div><button type="button" class="icon-btn danger budget-remove" title="Xóa hạng mục" onclick="removeBudgetItemRow(this)">−</button></div>`;
}
function addBudgetItemRow(){
 const list=document.getElementById('budgetItemsList');if(!list)return;
 list.insertAdjacentHTML('beforeend',budgetItemRow());
 bindBudgetItemInputs();updateBudgetTotal();
}
function removeBudgetItemRow(btn){
 const list=document.getElementById('budgetItemsList');
 if(list&&list.children.length<=1){showToast('Ngân sách phải có ít nhất một hạng mục');return}
 btn.closest('.budget-item-row')?.remove();updateBudgetTotal();
}
function bindBudgetItemInputs(){document.querySelectorAll('#budgetItemsList input[name="budgetItemAmount"]').forEach(x=>x.oninput=updateBudgetTotal)}
function updateBudgetTotal(){
 const total=[...document.querySelectorAll('#budgetItemsList input[name="budgetItemAmount"]')].reduce((a,x)=>a+Number(x.value||0),0);
 const totalInput=document.querySelector('#recordForm input[name="amount"]');if(totalInput)totalInput.value=total;
 const view=document.getElementById('budgetTotalView');if(view)view.textContent=money(total);
}
function approvalFlowHtml(){return `<div class="approval-form-flow full"><h3>Quy trình phê duyệt</h3><div class="approval-form-steps"><div class="approval-form-step"><span>1</span><b>Người nộp đơn</b><small id="approvalRequesterName">Trần Diệu Hương</small></div><i>→</i><div class="approval-form-step"><span>2</span><b>Trưởng bộ phận</b><small>Nguyễn Văn Nam</small></div><i>→</i><div class="approval-form-step"><span>3</span><b>Tài vụ</b><small>Trần Thu Hà</small></div><i>→</i><div class="approval-form-step"><span>4</span><b>Hoàn thành</b><small>Sau khi duyệt đủ</small></div></div></div>`}
function openBudgetRegistrationModal(fromUnified=false){
 document.getElementById('saveRecord').style.display='inline-flex';
 window.activeFormKey='registrations';
 document.getElementById('modalTitle').textContent='Ngân sách';
 document.getElementById('modalHint').textContent='Đăng ký ngân sách theo bộ phận, kỳ và từng hạng mục chi phí.';
 const people=Object.keys(requesterDepartments);
 document.getElementById('recordForm').innerHTML=`
  <input type="hidden" name="type" value="Ngân sách">
  <input type="hidden" name="managerApprover" value="Nguyễn Văn Nam">
  <input type="hidden" name="financeApprover" value="Trần Thu Hà">
  <input type="hidden" name="status" value="Tạo mới">
  <input type="hidden" name="amount" value="0">
  <div class="form-section-title full">I. Thông tin chung</div>
  <div class="field"><label>Người nộp đơn<select name="requester">${people.map(x=>`<option ${x==='Trần Diệu Hương'?'selected':''}>${x}</option>`).join('')}</select></label></div>
  <div class="field"><label>Bộ phận<input name="department" type="text" readonly></label></div>
  <div class="field"><label>Kỳ ngân sách<select name="periodType"><option>Tháng</option><option>Quý</option><option>Năm</option></select></label></div>
  <div id="budgetPeriodFields" class="budget-period-fields full"></div>
  <div class="field full"><label>Nội dung đăng ký<input name="name" type="text" readonly></label></div>
  <div class="form-section-title full">II. Thông tin ngân sách</div>
  <div id="budgetItemsList" class="budget-items-list full">${budgetItemRow('Chiết khấu nhà phân phối','')}</div>
  <div class="budget-items-footer full"><button type="button" class="btn subtle" onclick="addBudgetItemRow()">＋ Thêm hạng mục</button><div><span>Tổng tiền đề nghị</span><strong id="budgetTotalView">0 ₫</strong></div></div>
  ${approvalFlowHtml()}`;
 if(fromUnified)prependBudgetTypeSelector('registration');
 const requester=document.querySelector('#recordForm select[name="requester"]');
 const period=document.querySelector('#recordForm select[name="periodType"]');
 requester.addEventListener('change',()=>{updateBudgetRequester();const n=document.getElementById('approvalRequesterName');if(n)n.textContent=requester.value});
 period.addEventListener('change',budgetPeriodFields);
 updateBudgetRequester();budgetPeriodFields();bindBudgetItemInputs();updateBudgetTotal();
 document.getElementById('modalBackdrop').style.display='grid';
}
function adjustmentItemRow(budgetRef='',adjustmentType='Tăng ngân sách',amount=''){
 const opts=state.categoryBudgets.map(x=>`<option value="${x.id}" ${x.id===budgetRef?'selected':''}>${x.category} — ${budgetPeriodLabel(x)} — Còn ${money(categoryBudgetRemaining(x))}</option>`).join('');
 return `<div class="adjustment-item-row">
  <div class="field"><label>Hạng mục ngân sách<select name="adjustmentBudgetRef">${opts}</select></label></div>
  <div class="field"><label>Hình thức điều chỉnh<select name="adjustmentItemType"><option ${adjustmentType==='Tăng ngân sách'?'selected':''}>Tăng ngân sách</option><option ${adjustmentType==='Giảm ngân sách'?'selected':''}>Giảm ngân sách</option><option ${adjustmentType==='Điều chuyển ngân sách'?'selected':''}>Điều chuyển ngân sách</option></select></label></div>
  <div class="field"><label>Số tiền điều chỉnh<input name="adjustmentItemAmount" type="number" min="1" value="${amount}" required></label></div>
  <button type="button" class="icon-btn danger adjustment-remove" title="Xóa hạng mục" onclick="removeAdjustmentItemRow(this)">−</button>
 </div>`;
}
function addAdjustmentItemRow(){
 const list=document.getElementById('adjustmentItemsList');if(!list)return;
 list.insertAdjacentHTML('beforeend',adjustmentItemRow());bindAdjustmentItemInputs();updateAdjustmentSummary();
}
function removeAdjustmentItemRow(btn){
 const list=document.getElementById('adjustmentItemsList');
 if(list&&list.children.length<=1){showToast('Điều chỉnh ngân sách phải có ít nhất một hạng mục');return}
 btn.closest('.adjustment-item-row')?.remove();updateAdjustmentSummary();
}
function bindAdjustmentItemInputs(){
 document.querySelectorAll('#adjustmentItemsList input,#adjustmentItemsList select').forEach(x=>{x.oninput=updateAdjustmentSummary;x.onchange=updateAdjustmentSummary});
}
function updateAdjustmentSummary(){
 const f=document.getElementById('recordForm');if(!f)return;
 const refs=[...f.querySelectorAll('[name="adjustmentBudgetRef"]')];
 const types=[...f.querySelectorAll('[name="adjustmentItemType"]')];
 const amounts=[...f.querySelectorAll('[name="adjustmentItemAmount"]')];
 const items=refs.map((r,i)=>{const b=state.categoryBudgets.find(x=>x.id===r.value);return {budgetRef:r.value,category:b?.category||'',adjustmentType:types[i]?.value||'',amount:Number(amounts[i]?.value||0)}});
 const total=items.reduce((a,x)=>a+x.amount,0);
 const amount=f.querySelector('[name="amount"]');if(amount)amount.value=total;
 const view=document.getElementById('adjustmentTotalView');if(view)view.textContent=money(total);
 const name=f.querySelector('[name="name"]');if(name){name.value=items.length===1?`Điều chỉnh ${items[0].adjustmentType.toLowerCase()} ${items[0].category}`:`Điều chỉnh ngân sách ${items.length} hạng mục`;}
}
function openBudgetAdjustmentModal(fromUnified=false){
 document.getElementById('saveRecord').style.display='inline-flex';
 window.activeFormKey='registrations';
 document.getElementById('modalTitle').textContent='Điều chỉnh ngân sách';
 document.getElementById('modalHint').textContent='Khai báo rõ từng hạng mục cần tăng, giảm hoặc điều chuyển và lý do điều chỉnh.';
 const people=Object.keys(requesterDepartments);
 document.getElementById('recordForm').innerHTML=`
  <input type="hidden" name="type" value="Điều chỉnh ngân sách">
  <input type="hidden" name="managerApprover" value="Nguyễn Văn Nam">
  <input type="hidden" name="financeApprover" value="Trần Thu Hà">
  <input type="hidden" name="status" value="Tạo mới">
  <input type="hidden" name="amount" value="0">
  <input type="hidden" name="name" value="Điều chỉnh ngân sách">
  <div class="form-section-title full first-section">I. Thông tin người nộp</div>
  <div class="field"><label>Người nộp đơn<select name="requester">${people.map(x=>`<option ${x==='Trần Diệu Hương'?'selected':''}>${x}</option>`).join('')}</select></label></div>
  <div class="field"><label>Bộ phận<input name="department" type="text" readonly></label></div>
  <div class="form-section-title full">II. Chi tiết hạng mục điều chỉnh</div>
  <div id="adjustmentItemsList" class="adjustment-items-list full">${adjustmentItemRow()}</div>
  <div class="budget-items-footer full"><button type="button" class="btn subtle" onclick="addAdjustmentItemRow()">＋ Thêm hạng mục điều chỉnh</button><div><span>Tổng tiền điều chỉnh</span><strong id="adjustmentTotalView">0 ₫</strong></div></div>
  <div class="form-section-title full">III. Lý do và nội dung</div>
  <div class="field full"><label>Lý do điều chỉnh<textarea name="reason" rows="4" placeholder="Nhập rõ nguyên nhân, căn cứ và mục đích điều chỉnh" required></textarea></label></div>
  <div class="field full"><label>Nội dung đăng ký<input name="displayName" type="text" value="Tự động tổng hợp theo các hạng mục điều chỉnh" readonly></label></div>
  ${approvalFlowHtml()}`;
 if(fromUnified)prependBudgetTypeSelector('adjustment');
 const f=document.getElementById('recordForm');
 const requester=f.querySelector('[name="requester"]');
 requester.addEventListener('change',()=>{updateBudgetRequester();const n=document.getElementById('approvalRequesterName');if(n)n.textContent=requester.value});
 updateBudgetRequester();bindAdjustmentItemInputs();updateAdjustmentSummary();
 document.getElementById('modalBackdrop').style.display='grid';
}

function openRegistrationModal(type=''){
 document.getElementById('saveRecord').style.display='inline-flex';
 if(registrationFlow==='budget'||type==='Ngân sách'){openBudgetUnifiedModal();return}
 window.activeFormKey='registrations';document.getElementById('modalTitle').textContent='Tạo đăng ký chi phí';document.getElementById('modalHint').textContent='Chi phí phải liên kết đúng ngân sách hạng mục và không được vượt số dư.';
 const chosen=type||expenseTypes[0];const renderBudgetOptions=t=>eligibleBudgets(t).map(x=>`<option value="${x.id}">${x.id} — ${budgetPeriodLabel(x)} — Còn ${money(categoryBudgetRemaining(x))}</option>`).join('');
 document.getElementById('recordForm').innerHTML=`<input type="hidden" name="managerApprover" value="Nguyễn Văn Nam"><input type="hidden" name="financeApprover" value="Trần Thu Hà"><input type="hidden" name="status" value="Tạo mới"><div class="form-block full"><div class="form-section-title">I. Thông tin chung</div><div class="form-grid-inner"><div class="field"><label>Người tạo đơn<input name="requester" value="Trần Diệu Hương" readonly></label></div><div class="field"><label>Bộ phận<input value="Bộ phận Kinh doanh" readonly></label></div><div class="field"><label>Loại chi phí<select name="type">${expenseTypes.map(x=>`<option ${x===chosen?'selected':''}>${x}</option>`).join('')}</select></label></div><div class="field full"><label>Nội dung chi phí<input name="name" required></label></div></div></div><div class="form-block full"><div class="form-section-title">II. Thông tin chi phí</div><div class="form-grid-inner"><div class="field full"><label>Ngân sách liên kết<select name="budgetRef"></select></label><small id="budgetBalanceHint"></small></div><div class="field"><label>Số tiền chi phí<input name="amount" type="number" min="1" required></label></div><div class="field"><label>Ngày đề nghị<input name="requestDate" type="date"></label></div><div class="field full"><label>Ghi chú<textarea name="note" rows="3"></textarea></label></div></div></div><div class="form-block full"><div class="form-section-title">III. Quy trình phê duyệt</div>${approvalFlowHtml()}</div>`;
 const f=document.getElementById('recordForm'),typeEl=f.querySelector('[name="type"]'),ref=f.querySelector('[name="budgetRef"]'),amount=f.querySelector('[name="amount"]'),hint=f.querySelector('#budgetBalanceHint');
 const refresh=()=>{ref.innerHTML=renderBudgetOptions(typeEl.value)||'<option value="">Không có ngân sách phù hợp còn số dư</option>';const b=state.categoryBudgets.find(x=>x.id===ref.value);hint.textContent=b?`Kỳ ${budgetPeriodLabel(b)} · Hạng mục ${b.category} · Còn lại ${money(categoryBudgetRemaining(b))}`:'Cần đăng ký hoặc điều chỉnh ngân sách trước khi tạo chi phí.';amount.max=b?categoryBudgetRemaining(b):0};typeEl.onchange=refresh;ref.onchange=refresh;refresh();document.getElementById('modalBackdrop').style.display='grid';
}
const documentRequirements={
 'Chiết khấu nhà phân phối':['Đề nghị chiết khấu','Chính sách/Phụ lục chiết khấu','Bảng doanh số đối soát','Biên bản xác nhận với nhà phân phối','Hóa đơn hoặc chứng từ cấn trừ'],
 'Chiết khấu bán hàng':['Đề nghị chiết khấu bán hàng','Danh sách đơn hàng áp dụng','Bảng tính chiết khấu','Biên bản đối soát bán hàng','Chứng từ thanh toán/cấn trừ'],
 'Thưởng nhà phân phối':['Đề nghị thưởng nhà phân phối','Chính sách và điều kiện thưởng','Bảng xác nhận chỉ tiêu','Biên bản xác nhận kết quả','Chứng từ chi thưởng'],
 'Hội chợ':['Đề xuất tham gia hội chợ','Phê duyệt ngân sách','Hợp đồng/Đăng ký gian hàng','Hóa đơn và chứng từ chi phí','Biên bản nghiệm thu','Hình ảnh minh chứng','Báo cáo kết quả']
};
function expenseProcesses(){return state.approvals.filter(x=>!isBudgetProcess(x))}
function defaultDocumentItems(type){return (documentRequirements[type]||[]).map(name=>({name,status:'Còn thiếu',files:[],returnNote:''}))}
function ensureDocumentCases(){
 if(!state.documentCases)state.documentCases=[];
 const eligible=expenseProcesses().filter(x=>['Đang thực hiện','Chờ bổ sung tài liệu','Hoàn thành'].includes(x.status));
 eligible.forEach(x=>{
  if(!state.documentCases.some(c=>(c.expenseIds||[]).includes(x.id))){
   state.documentCases.push({id:'TL-'+x.id,expenseIds:[x.id],createdAt:new Date().toLocaleDateString('vi-VN'),itemsByType:{[x.type]:defaultDocumentItems(x.type)}})
  }
 });
 state.documentCases.forEach(c=>{
  if(!c.itemsByType)c.itemsByType={};
  (c.expenseIds||[]).forEach(id=>{const x=state.approvals.find(a=>a.id===id);if(x&&!c.itemsByType[x.type])c.itemsByType[x.type]=defaultDocumentItems(x.type)})
 });
}
function documentCaseComplete(c){
 const items=Object.values(c.itemsByType||{}).flat();
 return items.length>0&&items.every(i=>i.status==='Đã duyệt');
}
function expenseDocumentsComplete(expenseId){ensureDocumentCases();const cases=state.documentCases.filter(c=>(c.expenseIds||[]).includes(expenseId));return cases.length>0&&cases.some(documentCaseComplete)}
function documentCaseProgress(c){const items=Object.values(c.itemsByType||{}).flat();const approved=items.filter(i=>i.status==='Đã duyệt').length;return {approved,total:items.length,percent:items.length?Math.round(approved/items.length*100):0}}
function uploadCaseDocument(caseId,type,index,input){
 ensureDocumentCases();const c=state.documentCases.find(x=>x.id===caseId);if(!c)return;const item=c.itemsByType[type][index];
 const files=[...input.files].map(f=>({name:f.name,size:f.size,type:f.type,updated:new Date().toLocaleDateString('vi-VN')}));
 item.files=[...(item.files||[]),...files];item.status=item.files.length?'Chờ kiểm tra':'Còn thiếu';item.returnNote='';persist();go('documents');showToast(`Đã tải lên ${files.length} tệp`)
}
function removeCaseFile(caseId,type,index,fileIndex){ensureDocumentCases();const c=state.documentCases.find(x=>x.id===caseId);if(!c)return;const item=c.itemsByType[type][index];item.files.splice(fileIndex,1);item.status=item.files.length?'Chờ kiểm tra':'Còn thiếu';persist();go('documents')}
function approveCaseDocument(caseId,type,index){ensureDocumentCases();const c=state.documentCases.find(x=>x.id===caseId);if(!c)return;const item=c.itemsByType[type][index];if(!(item.files||[]).length){showToast('Chưa có tệp để phê duyệt');return}item.status='Đã duyệt';item.returnNote='';syncExpenseCompletion(c);persist();go('documents');showToast('Đã phê duyệt tài liệu')}
function returnCaseDocument(caseId,type,index){ensureDocumentCases();const c=state.documentCases.find(x=>x.id===caseId);if(!c)return;const note=prompt('Nhập nội dung cần hoàn trả/bổ sung:');if(note===null)return;const item=c.itemsByType[type][index];item.status='Hoàn trả';item.returnNote=note||'Cần bổ sung lại tài liệu';syncExpenseCompletion(c);persist();go('documents');showToast('Đã hoàn trả tài liệu')}
function syncExpenseCompletion(c){
 const complete=documentCaseComplete(c);
 (c.expenseIds||[]).forEach(id=>{const x=state.approvals.find(a=>a.id===id);if(!x)return;if(complete&&x.status==='Chờ bổ sung tài liệu'){x.status='Hoàn thành';x.completionReason='Đã hoàn tất và phê duyệt đầy đủ hồ sơ tài liệu'}else if(!complete&&x.status==='Hoàn thành'&&x.completionReason?.includes('tài liệu'))x.status='Chờ bổ sung tài liệu'})
}
function selectedExpenseIds(){return [...document.querySelectorAll('input[name="documentExpenseSelect"]:checked')].map(x=>x.value)}
function createCombinedDocumentCase(){
 const ids=selectedExpenseIds();if(!ids.length){showToast('Vui lòng chọn ít nhất một chi phí');return}
 ensureDocumentCases();
 // Loại các hồ sơ đơn lẻ chưa có tệp để tránh hiển thị trùng.
 state.documentCases=state.documentCases.filter(c=>!((c.expenseIds||[]).length===1&&ids.includes(c.expenseIds[0])&&Object.values(c.itemsByType||{}).flat().every(i=>!(i.files||[]).length)));
 const types=[...new Set(ids.map(id=>state.approvals.find(x=>x.id===id)?.type).filter(Boolean))];
 state.documentCases.unshift({id:'TL-'+Date.now().toString().slice(-8),expenseIds:ids,createdAt:new Date().toLocaleDateString('vi-VN'),itemsByType:Object.fromEntries(types.map(t=>[t,defaultDocumentItems(t)]))});
 persist();go('documents');showToast('Đã tạo bộ tài liệu cho các chi phí đã chọn')
}
function expenseSelector(){
 const rows=expenseProcesses().filter(x=>['Đã phê duyệt','Đang thực hiện','Chờ bổ sung tài liệu','Hoàn thành'].includes(x.status));
 return `<div class="panel document-selector"><div class="panel-head"><div><h3>Chọn chi phí liên kết</h3><p>Có thể chọn nhiều chi phí để quản lý trong cùng một bộ tài liệu.</p></div><button class="btn primary" onclick="createCombinedDocumentCase()">＋ Tạo bộ tài liệu</button></div><div class="expense-select-grid">${rows.map(x=>`<label class="expense-select-item"><input type="checkbox" name="documentExpenseSelect" value="${x.id}"><span><b>${x.name}</b><small>${x.id} · ${x.type} · ${money(x.amount)}</small></span>${badge(x.status)}</label>`).join('')}</div></div>`
}
function documents(){
 ensureDocumentCases();
 const sections=state.documentCases.map(c=>{
  const linked=(c.expenseIds||[]).map(id=>state.approvals.find(x=>x.id===id)).filter(Boolean);const prog=documentCaseProgress(c);
  const typeSections=Object.entries(c.itemsByType||{}).map(([type,items])=>`<div class="document-type-subsection"><div class="document-subhead"><div><span class="flow-badge">${type}</span><h4>Danh mục hồ sơ: ${type}</h4></div><b>${items.filter(i=>i.status==='Đã duyệt').length}/${items.length}</b></div><div class="document-detail-table"><div class="document-detail-row linked header"><span>Tên hồ sơ / tài liệu</span><span>Trạng thái</span><span>Tệp đã tải lên</span><span>Xử lý tài liệu</span></div>${items.map((item,i)=>`<div class="document-detail-row linked"><div><b>${i+1}. ${item.name}</b>${item.returnNote?`<small class="return-note">Hoàn trả: ${item.returnNote}</small>`:`<small>Bắt buộc đối với ${type}</small>`}</div><div>${badge(item.status)}</div><div class="uploaded-files">${(item.files||[]).length?(item.files||[]).map((f,fi)=>`<span>📎 ${f.name}<button onclick="removeCaseFile('${c.id}','${type}',${i},${fi})">×</button></span>`).join(''):'<em>Chưa có tệp</em>'}</div><div class="doc-actions"><label class="upload-btn">＋ Tải lên<input type="file" multiple onchange="uploadCaseDocument('${c.id}','${type}',${i},this)"></label>${item.status==='Chờ kiểm tra'?`<button class="action-btn warning" onclick="returnCaseDocument('${c.id}','${type}',${i})">Hoàn trả</button><button class="action-btn primary" onclick="approveCaseDocument('${c.id}','${type}',${i})">Phê duyệt</button>`:''}</div></div>`).join('')}</div></div>`).join('');
  return `<div class="panel document-case-card"><div class="document-case-head"><div><span class="flow-badge">Bộ tài liệu ${c.id}</span><h3>${linked.map(x=>x.name).join(' · ')}</h3><p>Liên kết ${linked.length} chi phí: ${linked.map(x=>`${x.id} (${x.type})`).join(', ')}</p></div><div class="doc-count"><b>${prog.approved}/${prog.total}</b><small>${documentCaseComplete(c)?'Đã hoàn thành':'Hồ sơ đã duyệt'}</small></div></div>${typeSections}<div class="doc-progress"><span style="width:${prog.percent}%"></span></div><div class="document-case-footer"><span>Tiến độ ${prog.percent}%</span><strong>${documentCaseComplete(c)?'✓ Đủ hồ sơ – chi phí được hoàn thành':'Chi phí chỉ hoàn thành sau khi toàn bộ tài liệu được phê duyệt'}</strong></div></div>`
 }).join('');
 return `<div class="panel intro-panel"><h3>Tài liệu theo chi phí</h3><p>Mỗi bộ tài liệu liên kết trực tiếp với một hoặc nhiều chi phí. Tài liệu tải lên phải được kiểm tra và phê duyệt đầy đủ trước khi chi phí chuyển sang Hoàn thành.</p></div>${expenseSelector()}${sections||'<div class="panel empty-state">Chưa có bộ tài liệu. Hãy chọn chi phí phía trên để tạo.</div>'}`
}
function settings(){return `<div class="grid-2"><div class="panel"><h3>Người tham gia phê duyệt</h3><p class="report-grid-note">Mỗi quy trình đi lần lượt qua người tạo đơn, trưởng bộ phận và tài vụ.</p>${[['Người tạo đơn','Người khởi tạo từng đề nghị'],['Trưởng bộ phận','Nguyễn Văn Nam / cấu hình theo phòng ban'],['Tài vụ','Trần Thu Hà / cấu hình theo đơn vị']].map(x=>`<div class="activity"><div class="grow"><b>${x[0]}</b><small>${x[1]}</small></div><span>→</span></div>`).join('')}<button class="btn primary" style="margin-top:14px" onclick="showToast('Đã lưu cấu hình người phê duyệt')">Lưu thay đổi</button></div><div class="panel"><h3>Cấu hình hệ thống</h3>${['Mã tự động','Phân quyền người dùng','Thông báo tài liệu','Ngôn ngữ hệ thống','Sao lưu dữ liệu'].map(x=>`<div class="activity"><div class="grow"><b>${x}</b><small>Cấu hình mô phỏng trong phiên bản demo</small></div><span>→</span></div>`).join('')}</div></div>`}
const renders={dashboard,master,expenses,registrations,documents,reports,settings};
function go(id){current=id;pageTitle.textContent=navItems.find(x=>x[0]===id)[2];app.innerHTML=renders[id]();document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('active',b.dataset.id===id));sidebar.classList.remove('open');bindSearch()}
function bindSearch(){const input=document.getElementById('globalSearch');input.value='';input.oninput=e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('tbody tr').forEach(r=>r.style.display=r.textContent.toLowerCase().includes(q)?'':'none')}}
nav.innerHTML=navItems.map(x=>`<button data-id="${x[0]}" onclick="go('${x[0]}')"><span>${x[1]}</span>${x[2]}</button>`).join('');
const formSchemas={
 discounts:[['name','Tên chính sách','text'],['target','Đối tượng áp dụng','text'],['condition','Điều kiện','text'],['value','Mức chiết khấu','text'],['owner','Bộ phận phụ trách','text'],['status','Trạng thái','select',['Đang áp dụng','Sắp hết hạn','Ngừng áp dụng']]],
 programs:[['name','Tên chương trình','text'],['type','Loại chương trình','text'],['owner','Người phụ trách','text'],['period','Thời gian','text'],['budget','Ngân sách','number'],['status','Trạng thái','select',['Bản nháp','Chờ đăng ký','Đang thực hiện','Chờ đối soát','Đã hoàn thành']]],
 expenses:[['name','Nội dung chi phí','text'],['ref','Mã chương trình/chính sách','text'],['department','Bộ phận','text'],['amount','Số tiền','number'],['status','Trạng thái','select',['Chờ đăng ký','Đã đăng ký','Chờ thanh toán','Đã thanh toán']]],
 documents:[['name','Tên tài liệu','text'],['type','Loại tài liệu','text'],['ref','Mã liên kết','text'],['updated','Ngày cập nhật','date'],['status','Trạng thái','select',['Chờ kiểm tra','Đã kiểm tra','Thiếu thông tin']]],
 registrations:[['type','Loại đăng ký','select',['Ngân sách','Chiết khấu nhà phân phối','Chiết khấu bán hàng','Thưởng nhà phân phối','Hội chợ']],['name','Nội dung','text'],['requester','Người tạo đơn','text'],['managerApprover','Tên trưởng bộ phận phê duyệt','text'],['financeApprover','Tên tài vụ phê duyệt','text'],['amount','Số tiền','number'],['status','Trạng thái','select',['Tạo mới','Chờ phê duyệt','Đã phê duyệt','Đang thực hiện','Chờ bổ sung tài liệu','Hoàn thành']]],
 monthlyBudgets:[['month','Tháng','number'],['year','Năm','number'],['planned','Ngân sách kế hoạch','number'],['approved','Ngân sách đăng ký','number'],['used','Đã sử dụng','number'],['status','Trạng thái','select',['Chưa thực hiện','Đang thực hiện','Đã chốt']]]
};
function openModal(forcedKey){let key=forcedKey||current;window.activeFormKey=key;if(!formSchemas[key]){showToast('Trang này chưa hỗ trợ tạo mới trong bản demo');return}const schema=formSchemas[key];document.getElementById('modalTitle').textContent=key==='monthlyBudgets'?'Thêm ngân sách tháng':`Tạo ${navItems.find(x=>x[0]===key)[2]}`;document.getElementById('recordForm').innerHTML=schema.map(f=>`<div class="field ${f[0]==='name'?'full':''}"><label>${f[1]}${f[2]==='select'?`<select name="${f[0]}">${f[3].map(o=>`<option>${o}</option>`).join('')}</select>`:`<input name="${f[0]}" type="${f[2]}" required>`}</label></div>`).join('');document.getElementById('modalBackdrop').style.display='grid'}
function openMonthlyBudgetModal(){openModal('monthlyBudgets')}
function closeModal(){document.getElementById('modalBackdrop').style.display='none';window.activeFormKey=null}
function saveRecord(){const customKey=window.activeFormKey;if(customKey==='revenueTarget'){const fd=new FormData(document.getElementById('recordForm'));const cats=fd.getAll('targetItemCategory'),amts=fd.getAll('targetItemAmount').map(v=>Number(v||0)),notes=fd.getAll('targetItemNote');const items=cats.map((category,i)=>({category,amount:amts[i]||0,note:notes[i]||''})).filter(x=>x.amount>0);const total=items.reduce((a,x)=>a+x.amount,0);if(!total){showToast('Vui lòng nhập ít nhất một hạng mục doanh thu mục tiêu');return}const pt=fd.get('periodType'),year=fd.get('year'),period=pt==='Tháng'?`Tháng ${fd.get('month')}/${year}`:pt==='Quý'?`Quý ${fd.get('quarter')}/${year}`:`Năm ${year}`;state.salesTargets.unshift({id:'MT-'+Date.now().toString().slice(-6),employee:fd.get('employee'),department:fd.get('department'),month:period,target:total,targetItems:items,actual:0,status:'Chờ phê duyệt'});persist();closeModal();go('expenses');showToast('Đã tạo doanh thu mục tiêu');return;}if(customKey==='salesReport'){const fd=new FormData(document.getElementById('recordForm'));const target=state.salesTargets.find(x=>x.id===fd.get('targetRef'));if(target)target.actual=Number(fd.get('actual')||0);persist();closeModal();salesReportMode='report';go('expenses');showToast('Đã lưu báo cáo bán hàng');return;}const key=window.activeFormKey||current;const schema=formSchemas[key];if(!schema)return;const fd=new FormData(document.getElementById('recordForm'));const obj={};if(key==='registrations'&&['Ngân sách','Điều chỉnh ngân sách'].includes(fd.get('type'))){for(const [k,v] of fd.entries()){if(['budgetItemCategory','budgetItemAmount'].includes(k))continue;obj[k]=k==='amount'?Number(v||0):v;}if(fd.get('type')==='Ngân sách'){const cats=fd.getAll('budgetItemCategory'),amts=fd.getAll('budgetItemAmount').map(v=>Number(v||0));obj.budgetItems=cats.map((category,i)=>({category,amount:amts[i]||0})).filter(x=>x.amount>0);obj.amount=obj.budgetItems.reduce((a,x)=>a+x.amount,0);obj.category=obj.budgetItems.length===1?obj.budgetItems[0].category:`${obj.budgetItems.length} hạng mục`;}else if(fd.get('type')==='Điều chỉnh ngân sách'){const refs=fd.getAll('adjustmentBudgetRef'),types=fd.getAll('adjustmentItemType'),amts=fd.getAll('adjustmentItemAmount').map(v=>Number(v||0));obj.adjustmentItems=refs.map((budgetRef,i)=>{const b=state.categoryBudgets.find(x=>x.id===budgetRef);return {budgetRef,category:b?.category||'',adjustmentType:types[i],amount:amts[i]||0}}).filter(x=>x.amount>0);obj.amount=obj.adjustmentItems.reduce((a,x)=>a+x.amount,0);obj.category=obj.adjustmentItems.length===1?obj.adjustmentItems[0].category:`${obj.adjustmentItems.length} hạng mục`;obj.budgetRef=obj.adjustmentItems[0]?.budgetRef||'';obj.adjustmentType=obj.adjustmentItems.length===1?obj.adjustmentItems[0].adjustmentType:'Nhiều hình thức';}obj.usedAmount=0;obj.year=Number(obj.year);if(obj.month)obj.month=Number(obj.month);if(obj.quarter)obj.quarter=Number(obj.quarter);}else{schema.forEach(f=>obj[f[0]]=f[2]==='number'?Number(fd.get(f[0])||0):fd.get(f[0]));}if(!obj.name){showToast('Vui lòng nhập tên hoặc nội dung');return}if(key==='registrations'&&['Ngân sách','Điều chỉnh ngân sách'].includes(obj.type)&&!obj.amount){showToast('Vui lòng nhập ít nhất một hạng mục và số tiền ngân sách');return}if(key==='registrations'&&!['Ngân sách','Điều chỉnh ngân sách'].includes(obj.type)){const b=state.categoryBudgets.find(x=>x.id===obj.budgetRef);if(!b){showToast('Không có ngân sách hạng mục phù hợp. Vui lòng đăng ký hoặc điều chỉnh ngân sách trước.');return}const remain=categoryBudgetRemaining(b);if(obj.amount>remain){showToast(`Chi phí vượt ngân sách còn lại ${money(remain)} của ${budgetPeriodLabel(b)} — ${b.category}`);return}obj.category=b.category;obj.department=b.department;obj.periodType=b.periodType;obj.month=b.month||'';obj.quarter=b.quarter||'';obj.year=b.year;}const prefixes={discounts:'CK',programs:'CT',expenses:'CP',documents:'HS',registrations:'QT',monthlyBudgets:'NS-T'};obj.id=key==='monthlyBudgets'?`NS-T${String(obj.month).padStart(2,'0')}-${obj.year}`:`${prefixes[key]}-${Date.now().toString().slice(-6)}`;if(key==='documents'&&obj.updated)obj.updated=new Date(obj.updated).toLocaleDateString('vi-VN');if(key==='monthlyBudgets'){const existing=state.monthlyBudgets.findIndex(x=>x.month===obj.month&&x.year===obj.year);if(existing>=0)state.monthlyBudgets[existing]=obj;else state.monthlyBudgets.push(obj);state.monthlyBudgets.sort((a,b)=>a.year-b.year||a.month-b.month)}else if(key==='registrations'){obj.approvalTotal=2;obj.approvalStep=obj.status==='Tạo mới'||obj.status==='Chờ phê duyệt'?0:2;state.approvals.unshift(obj);if(!['Ngân sách','Điều chỉnh ngân sách'].includes(obj.type)){const b=state.categoryBudgets.find(x=>x.id===obj.budgetRef);if(b)b.used=Number(b.used||0)+Number(obj.amount||0);}}else state[key].unshift(obj);persist();closeModal();go(key==='monthlyBudgets'?'master':current);showToast('Đã lưu bản ghi mới')}
function removeItem(key,id){state[key]=state[key].filter(x=>x.id!==id);persist();go(current);showToast('Đã xóa bản ghi')}
function submitProcess(id){
 const x=state.approvals.find(i=>i.id===id);if(!x)return;
 x.status='Chờ phê duyệt';x.approvalStep=0;x.decisionNote='Đã nộp đơn, chờ Trưởng bộ phận';x.submittedAt=new Date().toLocaleString('vi-VN');persist();go('registrations');showToast('Đã nộp đơn để phê duyệt');
}
function editProcess(id){
 const x=state.approvals.find(i=>i.id===id);if(!x)return;
 const amount=prompt('Điều chỉnh số tiền',String(x.amount||0));if(amount===null)return;
 const value=Number(String(amount).replace(/[^0-9]/g,''));if(!value){showToast('Số tiền không hợp lệ');return;}
 const name=prompt('Điều chỉnh nội dung',x.name||'');if(name===null)return;
 x.amount=value;x.name=name.trim()||x.name;x.decisionNote='Đã điều chỉnh bởi '+CURRENT_USER;persist();go('registrations');showToast('Đã cập nhật đơn');
}
function deleteProcess(id){
 const x=state.approvals.find(i=>i.id===id);if(!x||!['Tạo mới','Hoàn trả'].includes(x.status))return;
 if(!confirm('Xóa đơn này? Dữ liệu đã xóa không thể khôi phục.'))return;
 state.approvals=state.approvals.filter(i=>i.id!==id);persist();go('registrations');showToast('Đã xóa đơn');
}
function rejectProcess(id){
 const x=state.approvals.find(i=>i.id===id);if(!x)return;
 const reason=prompt('Nhập lý do từ chối');if(reason===null||!reason.trim()){showToast('Vui lòng nhập lý do từ chối');return;}
 x.status='Từ chối';x.decisionNote='Từ chối: '+reason.trim();x.decidedBy=nextApprover(x);x.decidedAt=new Date().toLocaleString('vi-VN');persist();go('registrations');showToast('Đã từ chối đơn');
}
function returnProcess(id){
 const x=state.approvals.find(i=>i.id===id);if(!x)return;
 const reason=prompt('Nhập nội dung yêu cầu điều chỉnh');if(reason===null||!reason.trim()){showToast('Vui lòng nhập nội dung hoàn trả');return;}
 x.status='Hoàn trả';x.decisionNote='Hoàn trả: '+reason.trim();x.returnedBy=nextApprover(x);x.approvalStep=0;persist();go('registrations');showToast('Đã hoàn trả đơn cho người nộp');
}
function approveProcess(id){
 const x=state.approvals.find(i=>i.id===id);if(!x||x.status!=='Chờ phê duyệt')return;
 x.approvalTotal=x.approvalTotal||2;x.approvalStep=(x.approvalStep||0)+1;
 if(x.approvalStep<x.approvalTotal){x.decisionNote='Trưởng bộ phận đã phê duyệt, chuyển Tài vụ';}
 else{
  x.status=isBudgetProcess(x)?'Đang thực hiện':'Đã phê duyệt';x.decisionNote=isBudgetProcess(x)?'Đã hoàn tất phê duyệt và bắt đầu thực hiện':'Đã hoàn tất phê duyệt';
  applyApprovedBudgetChange(x);
 }
 persist();go('registrations');showToast(x.status==='Chờ phê duyệt'?'Đã phê duyệt và chuyển người tiếp theo':'Đã hoàn tất phê duyệt');
}
function applyApprovedBudgetChange(x){
 if(x.type==='Ngân sách'&&!x.budgetCreated){const code=x.periodType==='Tháng'?`T${String(x.month).padStart(2,'0')}`:x.periodType==='Quý'?`Q${x.quarter}`:'N';const catCode=(x.category||'Khác').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z]/g,'').slice(0,6).toUpperCase();const id=`NS-HM-${catCode}-${code}-${x.year}`;if(!state.categoryBudgets.some(i=>i.id===id))state.categoryBudgets.unshift({id,department:x.department,category:x.category||'Khác',periodType:x.periodType,month:x.month||'',quarter:x.quarter||'',year:x.year,approved:Number(x.amount||0),used:0,status:'Đang thực hiện'});x.budgetCreated=true;}
 if(x.type==='Điều chỉnh ngân sách'&&!x.adjustmentApplied){const items=x.adjustmentItems?.length?x.adjustmentItems:[{budgetRef:x.budgetRef,adjustmentType:x.adjustmentType,amount:Number(x.amount||0)}];for(const item of items){const b=state.categoryBudgets.find(i=>i.id===item.budgetRef);if(!b)continue;if(item.adjustmentType==='Tăng ngân sách')b.approved+=Number(item.amount||0);else if(item.adjustmentType==='Giảm ngân sách'){if(Number(item.amount||0)>categoryBudgetRemaining(b)){x.status='Chờ phê duyệt';x.approvalStep=x.approvalTotal-1;showToast(`Không thể giảm vượt phần ngân sách còn lại của ${b.category}`);return}b.approved-=Number(item.amount||0);}}x.adjustmentApplied=true;}
}
function finishBudget(id){const x=state.approvals.find(i=>i.id===id);if(!x)return;x.usedAmount=x.amount;x.status='Hoàn thành';x.completionReason='Đã sử dụng hết ngân sách';persist();go('registrations');showToast('Ngân sách đã hoàn thành');}

function advanceProcess(id){const x=state.approvals.find(i=>i.id===id);if(!x)return;
 if(x.status==='Tạo mới'){x.status='Chờ phê duyệt';x.approvalStep=0;}
 else if(x.status==='Chờ phê duyệt'){
  x.approvalTotal=x.approvalTotal||2;x.approvalStep=(x.approvalStep||0)+1;
  if(x.approvalStep>=x.approvalTotal){x.status=['Ngân sách','Điều chỉnh ngân sách'].includes(x.type)?'Đang thực hiện':'Đã phê duyệt';if(x.type==='Ngân sách'&&!x.budgetCreated){const code=x.periodType==='Tháng'?`T${String(x.month).padStart(2,'0')}`:x.periodType==='Quý'?`Q${x.quarter}`:'N';const catCode=(x.category||'Khác').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z]/g,'').slice(0,6).toUpperCase();const id=`NS-HM-${catCode}-${code}-${x.year}`;if(!state.categoryBudgets.some(i=>i.id===id))state.categoryBudgets.unshift({id,department:x.department,category:x.category||'Khác',periodType:x.periodType,month:x.month||'',quarter:x.quarter||'',year:x.year,approved:Number(x.amount||0),used:0,status:'Đang thực hiện'});x.budgetCreated=true;}if(x.type==='Điều chỉnh ngân sách'&&!x.adjustmentApplied){const items=x.adjustmentItems?.length?x.adjustmentItems:[{budgetRef:x.budgetRef,adjustmentType:x.adjustmentType,amount:Number(x.amount||0)}];for(const item of items){const b=state.categoryBudgets.find(i=>i.id===item.budgetRef);if(!b)continue;if(item.adjustmentType==='Tăng ngân sách')b.approved+=Number(item.amount||0);else if(item.adjustmentType==='Giảm ngân sách'){if(Number(item.amount||0)>categoryBudgetRemaining(b)){x.status='Chờ phê duyệt';x.approvalStep=x.approvalTotal-1;showToast(`Không thể giảm vượt phần ngân sách còn lại của ${b.category}`);return}b.approved-=Number(item.amount||0);}}x.adjustmentApplied=true;}}
 }
 else if(['Ngân sách','Điều chỉnh ngân sách'].includes(x.type)&&x.status==='Đang thực hiện'){
  x.usedAmount=x.amount;x.status='Hoàn thành';x.completionReason='Đã sử dụng hết ngân sách';
 }
 else if(x.status==='Đã phê duyệt')x.status='Đang thực hiện';
 else if(x.status==='Đang thực hiện')x.status='Chờ bổ sung tài liệu';
 else if(x.status==='Chờ bổ sung tài liệu'){if(!expenseDocumentsComplete(x.id)){showToast('Chi phí chưa thể hoàn thành: hồ sơ tài liệu chưa được tải lên và phê duyệt đầy đủ');go('documents');return}x.status='Hoàn thành';x.completionReason='Đã hoàn tất và phê duyệt đầy đủ hồ sơ tài liệu';}
 persist();go('registrations');showToast(['Ngân sách','Điều chỉnh ngân sách'].includes(x.type)&&x.status==='Đang thực hiện'?'Ngân sách đã được phê duyệt và chuyển sang đang thực hiện':'Đã cập nhật trạng thái quy trình')}

function incrementMaster(key){state.master[key]++;persist();go('master');showToast('Đã thêm dữ liệu mẫu')}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='salescost-data.json';a.click();URL.revokeObjectURL(a.href);showToast('Đã xuất dữ liệu JSON')}
function showToast(t){const toast=document.getElementById('toast');toast.textContent='✓ '+t;toast.style.display='block';setTimeout(()=>toast.style.display='none',2200)}
document.getElementById('menuBtn').onclick=()=>sidebar.classList.toggle('open');document.getElementById('createBtn').onclick=()=>{if(current==='expenses')return salesReportMode==='targets'?openRevenueTargetModal():openSalesReportModal();if(current==='registrations')return registrationFlow==='budget'?openBudgetUnifiedModal():openRegistrationModal('');openModal()};document.getElementById('exportBtn').onclick=exportData;document.getElementById('closeModal').onclick=closeModal;document.getElementById('cancelModal').onclick=closeModal;document.getElementById('saveRecord').onclick=saveRecord;document.getElementById('modalBackdrop').onclick=e=>{if(e.target.id==='modalBackdrop')closeModal()};
const routeMap={dashboard:'dashboard',master:'master',revenue:'expenses',cost:'registrations',file:'documents',documents:'documents',reports:'reports',settings:'settings'};
const initialRoute=location.pathname.replace(/^\/+|\/+$/g,'').split('/')[0]||'dashboard';
go(routeMap[initialRoute]||'dashboard');
