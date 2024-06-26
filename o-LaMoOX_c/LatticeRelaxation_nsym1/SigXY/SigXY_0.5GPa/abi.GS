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
  1.35882619845693E+01  8.20295643265414E-01 -4.37186726625488E-03
  8.33503327612842E-01  1.35900902996919E+01  1.08308269088101E-02
 -5.00996500136578E-03  1.01507928826546E-02  1.32972427986207E+01

             xred      8.6655306132E-01  8.1674536217E-01  8.6750781940E-01
                       3.3307606766E-01  6.0404156163E-01  1.2337356976E-01
                       1.6644643102E-01  3.9601635706E-01  6.2332761922E-01
                       6.3140793472E-01  1.8268157625E-01  3.6953257038E-01
                       1.2085288761E-01  1.8939637500E-01  1.6162407896E-01
                       7.0715658681E-01  2.9857420651E-01  8.3143545846E-01
                       7.9293234078E-01  7.0152008416E-01  3.3052470831E-01
                       3.7908057503E-01  8.1027069742E-01  6.6191635829E-01
                       3.0757362731E-01  3.0324176655E-01  3.1927287896E-01
                       7.8906310118E-01  9.8563322785E-02  6.8349055014E-01
                       7.1010325645E-01  9.0240998056E-01  1.8378368858E-01
                       1.9170180980E-01  6.9796576916E-01  8.1889417109E-01
                       9.6486524629E-01  2.5331798081E-01  3.6815970578E-01
                       5.1781840792E-01  3.6673399704E-01  6.6700747272E-01
                      -1.8701987969E-02  6.3384756359E-01  1.6522237202E-01
                       5.3439339636E-01  7.4587702171E-01  8.6981497981E-01
                       2.3354570773E-01  9.6006566480E-01  1.6613817720E-01
                       2.6806663145E-01  4.0377434107E-02  6.6404253812E-01
                       8.5912657596E-01  4.7216229685E-01  8.1014210278E-01
                       6.4068033427E-01  5.2809754086E-01  3.1048707499E-01
                       1.9942732209E-01  3.3777620347E-01  9.7349829685E-01
                       9.2925645565E-01  6.9526617262E-01  5.4133470212E-01
                       3.0121773494E-01  6.6263778537E-01  4.7357882066E-01
                       5.7243396022E-01  3.0392060583E-01  4.2921833783E-02
                      -8.4158777693E-02  1.4288187381E-01  1.0381084106E-02
                       5.8608131307E-01  8.5561079989E-01  5.1258736751E-01
 
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
