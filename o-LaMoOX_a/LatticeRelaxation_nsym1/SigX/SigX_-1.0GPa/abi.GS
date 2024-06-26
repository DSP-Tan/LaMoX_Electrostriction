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
  1.32225156014357E+01 -1.58934674979576E-03  7.20572320611286E-03
 -1.24761895802441E-03  1.36031746645474E+01  6.95702040638314E-01
  7.20085848812679E-03  7.22507213814672E-01  1.36004490204807E+01

             xred      8.6871294696E-01  8.7064717264E-01  8.1890294198E-01
                       3.6935070933E-01  6.2771363062E-01  1.8027110841E-01
                       1.2451947489E-01  3.3488605212E-01  6.0464811697E-01
                       6.2412726869E-01  1.6485009691E-01  3.9562935719E-01
                       1.6160675310E-01  1.1978125631E-01  1.8927526418E-01
                       6.6204890387E-01  3.8022846261E-01  8.1067564740E-01
                       8.3101368732E-01  7.0482919215E-01  2.9838347849E-01
                       3.3102343617E-01  7.9448024096E-01  7.0157231610E-01
                       3.1969141203E-01  3.0619951835E-01  3.0397857729E-01
                       8.1973533396E-01  1.9352118218E-01  6.9792338603E-01
                       6.8297868446E-01  7.8464650684E-01  9.8895358738E-02
                       1.8277280225E-01  7.1375932622E-01  9.0109395539E-01
                       9.7298440649E-01  1.9973093233E-01  3.3934542562E-01
                       4.7308160087E-01  3.0021465292E-01  6.6157480576E-01
                       4.3736819701E-02  5.7079350953E-01  3.0124785353E-01
                       5.4327529122E-01  9.2957368805E-01  6.9807481483E-01
                       3.6917009301E-01  9.6411290314E-01  2.5042298420E-01
                       1.6610188213E-01 -1.7543538905E-02  6.3404573739E-01
                       8.6945842440E-01  5.3632384255E-01  7.4819521585E-01
                       6.6660736934E-01  5.1668630004E-01  3.6685113814E-01
                       1.6368909673E-01  2.3072194584E-01  9.6108420932E-01
                       8.1145551058E-01  8.5820687438E-01  4.7313073583E-01
                       3.1158075779E-01  6.4210906116E-01  5.2603164727E-01
                       6.6287162880E-01  2.7233922785E-01  4.0125692827E-02
                       8.8355607567E-03 -8.5208886469E-02  1.4441401717E-01
                       5.0957014520E-01  5.8639684967E-01  8.5420621409E-01
 
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
