eps0x=32.91092172
eps0y=24.24311706
eps0z=22.90235905
eps0yz=1.35568482
eps0xz=3.21380953
eps0xy=-0.37748633

#eta0x=
#eta0y=
#eta0z=
#eta0yz=
#eta0xz=
#eta0xy=

eps_free=8.85418782e-12

# Fit dielectric constant to stress
f(x)= eps0x*eps_free + 2*x*M15
#fit f(x) "<(sed -n '/^-0\.5/,/^0\.5/p' StressPerm.txt)" using ($2*10**9):($3*eps_free) via M15
fit f(x) "StressPerm.txt" using ($2*10**9):($3*eps_free) via M15

f(x)= eps0y*eps_free + 2*x*M25
fit f(x) "StressPerm.txt" using ($2*10**9):($7*eps_free) via M25

f(x)= eps0z*eps_free + 2*x*M35
fit f(x) "StressPerm.txt" using ($2*10**9):($11*eps_free) via M35

f(x)= eps0yz*eps_free + 2*x*M45
fit f(x) "StressPerm.txt" using  ($2*10**9):($8*eps_free) via M45

f(x)= eps0xz*eps_free + 2*x*M55
fit f(x) "StressPerm.txt" using ($2*10**9):($5*eps_free) via M55

f(x)= eps0xy*eps_free + 2*x*M65
fit f(x) "StressPerm.txt" using ($2*10**9):($4*eps_free) via M65


## Fit electric rigidity to stress
#f(x)= eta0x/eps_free + 2*x*Q15
#fit f(x) "<(sed -n '/^-0\.5/,/^0\.5/p' StressRigid.txt)" using ($2*10**9):($3/eps_free) via Q15
#
#f(x)= eta0y/eps_free + 2*x*Q25
#fit f(x) "<(sed -n '/^-0\.5/,/^0\.5/p' StressRigid.txt)" using ($2*10**9):($7/eps_free) via Q25
#
#f(x)= eta0z/eps_free + 2*x*Q35
#fit f(x) "<(sed -n '/^-0\.5/,/^0\.5/p' StressRigid.txt)" using ($2*10**9):($11/eps_free) via Q35
#
#f(x)= eta0yz/eps_free + 2*x*Q45
#fit f(x) "<(sed -n '/^-0\.5/,/^0\.5/p' StressRigid.txt)" using ($2*10**9):($8/eps_free) via Q45
#
#f(x)= eta0xz/eps_free + 2*x*Q55
#fit f(x) "<(sed -n '/^-0\.5/,/^0\.5/p' StressRigid.txt)" using ($2*10**9):($5/eps_free) via Q55
#
#f(x)= eta0xy/eps_free + 2*x*Q65
#fit f(x) "<(sed -n '/^-0\.5/,/^0\.5/p' StressRigid.txt)" using ($2*10**9):($4/eps_free) via Q65




