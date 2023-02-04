document.querySelector(".form").addEventListener("submit", (e)=> {
  e.preventDefault()

  let H0 = document.getElementById("H0").value-0
  let A0 = document.getElementById("A0").value-0
  let V0 = document.getElementById("V0").value-0
  let Af = document.getElementById("Af").value-0
  let h0 = document.getElementById("h0").value-0
  let V_jb1 = document.getElementById("V_jb1").value-0
  let V_jb2 = document.getElementById("V_jb2").value-0
  let l_p1 = document.getElementById("l_p1").value-0
  let l_p2 = document.getElementById("l_p2").value-0
  let N_tq1 = document.getElementById("N_tq1").value-0
  let N_tq2 = document.getElementById("N_tq2").value-0
  let v = document.getElementById("v").value-0
  let b = document.getElementById("b").value-0
  let PMQHB = document.getElementById("PMQHB").value-0
  let PUS = document.getElementById("PUS").value-0

  let n_tayanch =  24.3 * H0 * A0
  let n_wn_tick = V0 * 10
  let n_wn = (Af - A0) * h0 * 10
  let n_pp = 0.5 * ((V_jb1 + V_jb2) * 25 * 5 * (l_p1 + l_p2) + N_tq1 + N_tq2)
  let n_vp = 0.5 * 2 * 20 * (l_p1 + l_p2)

  let l1 = l_p1 - 0.7
  let l2 = l_p2 - 0.7
  let Ck = 0.5* (l_p1  -l1) + 0.5 * (l_p2 - l2) + 0.05
  let omega = ((l1 + 0.5 * Ck)^2)/ (2* l1) + ((l2 + 0.5 * Ck)^2)/ (2* l2)
  let alfa = (l1 + 0.5*Ck)/(l1+l2+Ck)
  let beta = l1+l2+Ck

  let n_vn = v * omega

  let S_hn = 0.59 * 14 * (l_p1 + l_p2)/2
  let F_hl = 1 * 735 * b * 0.15
  let h_nl = PMQHB - 0.3 * 0.15 - PUS

  document.getElementById("n_tayanch").textContent = n_tayanch
  document.getElementById("n_wn_tick").textContent = n_wn_tick
  document.getElementById("n_wn").textContent = n_wn
  document.getElementById("n_pp").textContent = n_pp
  document.getElementById("n_vp").textContent = n_vp
  document.getElementById("n_vn").textContent = n_vn
  document.getElementById("beta").textContent = beta
  document.getElementById("alfa").textContent = alfa
  document.getElementById("omega").textContent = omega
  document.getElementById("Ck").textContent = Ck
  document.getElementById("l1").textContent = l1
  document.getElementById("l2").textContent = l2
  document.getElementById("S_hn").textContent = S_hn
  document.getElementById("F_hl").textContent = F_hl
  document.getElementById("h_nl").textContent = h_nl
})