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
  1.32805575309779E+01 -1.56068870977065E-03  1.05334147851741E-03
 -1.85918848841072E-03  1.35403329052744E+01 -7.10942642806809E-01
  1.28574920067632E-03 -7.27276116300523E-01  1.36994431212545E+01

             xred      8.7619034346E-01  8.3411341700E-01  8.9576792241E-01
                       3.7626668666E-01  6.6593507951E-01  1.0426041935E-01
                       1.3200269368E-01  3.6939704502E-01  6.8206062541E-01
                       6.3181857690E-01  1.3028125608E-01  3.1812901041E-01
                       1.6892899355E-01  2.0641041090E-01  2.0361530139E-01
                       6.6875756091E-01  2.9370816241E-01  7.9643279159E-01
                       8.3846276548E-01  6.2063687720E-01  3.1067477671E-01
                       3.3831346605E-01  8.7905678987E-01  6.8930441977E-01
                       3.1599791382E-01  2.8749545965E-01  4.0226594794E-01
                       8.1592170596E-01  2.1247776219E-01  5.9784312638E-01
                       6.8054533724E-01  8.0714778051E-01  1.9548824814E-01
                       1.8051518209E-01  6.9270978424E-01  8.0441345448E-01
                       9.5652210581E-01  7.1947197806E-02  1.9618099582E-01
                       4.5676400506E-01  4.2877949263E-01  8.0359418181E-01
                       2.6336251699E-02  6.9972676088E-01  1.6152303284E-01
                       5.2625606206E-01  8.0057549973E-01  8.3853127281E-01
                       3.3384647491E-01  1.0175390645E+00  1.3708485449E-01
                       1.3140331432E-01  3.5698049809E-02  7.5196264864E-01
                       8.3390671127E-01  4.8255603798E-01  8.6300147721E-01
                       6.3177802217E-01  4.6381169256E-01  2.4776489429E-01
                       1.8951186568E-01  3.5870647824E-01  1.0289505150E+00
                       8.3563502982E-01  7.3181327567E-01  5.3745084602E-01
                       3.3593843356E-01  7.6786879616E-01  4.6248026532E-01
                       6.8901363835E-01  1.4122220769E-01 -2.9044814153E-02
                       9.8998584845E-01  4.1456419298E-01  3.5618012415E-01
                       4.8938101099E-01  1.0858214287E+00  6.4408366181E-01
 
kptopt   1
            ngfft          72      75      75
ngkpt    2 2 2
nshiftk 1
shiftk 
0.5 0.5 0.5
ecut       30
ecutsm  0.5
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
