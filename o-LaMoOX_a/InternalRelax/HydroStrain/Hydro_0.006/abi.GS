#input for non-centrosymmetric orthorhombic HfO2

ndtset    2

autoparal 1

#Crystal Def.
ntypat   3
natom    26
typat    4*1 4*2 18*3
znucl    57 42 8
acell 3*1

rprim

             xred      8.6835864121E-01  8.8972485600E-01  8.2421278104E-01
                       3.6835864121E-01  6.1027514400E-01  1.7578721896E-01
                       1.4718077649E-01  3.3059482390E-01  6.2473469996E-01
                       6.4718077649E-01  1.6940517610E-01  3.7526530004E-01
                       1.6289127918E-01  1.2301436438E-01  1.8923051536E-01
                       6.6289127918E-01  3.7698563562E-01  8.1076948464E-01
                       8.2569589576E-01  7.0521563948E-01  2.8725789712E-01
                       3.2569589576E-01  7.9478436052E-01  7.1274210288E-01
                       3.2756427536E-01  3.0395003504E-01  3.0877574161E-01
                       8.2756427536E-01  1.9604996496E-01  6.9122425839E-01
                       6.7771995832E-01  7.7789049846E-01  9.8323037850E-02
                       1.7771995832E-01  7.2210950154E-01  9.0167696215E-01
                       9.8989607452E-01  2.1991093723E-01  3.5659572590E-01
                       4.8989607452E-01  2.8008906277E-01  6.4340427410E-01
                       4.2064496454E-02  5.9425966196E-01  2.6133301667E-01
                       5.4206449645E-01  9.0574033804E-01  7.3866698333E-01
                       3.4858172584E-01  9.5443031576E-01  2.3499724177E-01
                       1.7596509760E-01 -1.7353737134E-02  6.4356445177E-01
                       8.4858172584E-01  5.4556968424E-01  7.6500275823E-01
                       6.7596509760E-01  5.1735373713E-01  3.5643554823E-01
                       1.6683322813E-01  2.2755332169E-01  9.6630236953E-01
                       8.0815224559E-01  8.6604298560E-01  4.7404623817E-01
                       3.0815224559E-01  6.3395701440E-01  5.2595376183E-01
                       6.6683322813E-01  2.7244667831E-01  3.3697630466E-02
                      -1.5911694452E-02 -5.8992359805E-02  1.4167133832E-01
                       4.8408830555E-01  5.5899235980E-01  8.5832866168E-01
 
kptopt   1
ngkpt    2 2 2
nshiftk 1
shiftk 
0.5 0.5 0.5

ecut 30
pawecutdg  30
pawxcdev   0
ixc      -116133
nband    104
diemac   4

# First SCF run       
#irdwfk1   1
nstep1    100
iscf1     7
tolvrs1   1.0E-20

#Refinement using tolwfr
nstep2    250
getwfk2   -1
iscf2     7
tolwfr2   1.0E-20

# Printing flags
prtden    1
prteig    0
prtwf     1
prtposcar 0
prtcif    1
