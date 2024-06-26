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
  1.33128247149660E+01  0.00000000000000E+00  0.00000000000000E+00
  0.00000000000000E+00  1.35741102364924E+01 -6.96807751760834E-01
  0.00000000000000E+00 -7.09202701144414E-01  1.35717323808034E+01

             xred      8.7598635433E-01  8.3504193169E-01  8.9523708631E-01
                       3.7598635433E-01  6.6495806831E-01  1.0476291369E-01
                       1.3029701567E-01  3.7172235589E-01  6.8156463215E-01
                       6.3029701567E-01  1.2827764411E-01  3.1843536785E-01
                       1.6868708071E-01  2.0514112153E-01  2.0257441741E-01
                       6.6868708071E-01  2.9485887847E-01  7.9742558259E-01
                       8.3857200341E-01  6.1970813428E-01  3.1078070128E-01
                       3.3857200341E-01  8.8029186572E-01  6.8921929872E-01
                       3.1616348520E-01  2.8607150529E-01  4.0207182763E-01
                       8.1616348520E-01  2.1392849471E-01  5.9792817237E-01
                       6.8084821805E-01  8.0603605974E-01  1.9575182340E-01
                       1.8084821805E-01  6.9396394026E-01  8.0424817660E-01
                       9.5652932502E-01  7.1769745327E-02  1.9804336038E-01
                       4.5652932502E-01  4.2823025467E-01  8.0195663962E-01
                       2.6120296867E-02  6.9995018895E-01  1.6121723028E-01
                       5.2612029687E-01  8.0004981105E-01  8.3878276972E-01
                       3.3258535840E-01  1.0167769286E+00  1.3455214388E-01
                       1.3238937296E-01  3.6826923599E-02  7.5092160695E-01
                       8.3258535840E-01  4.8322307144E-01  8.6544785612E-01
                       6.3238937296E-01  4.6317307640E-01  2.4907839305E-01
                       1.8880269286E-01  3.5888755385E-01  1.0274275307E+00
                       8.3680544063E-01  7.3007376558E-01  5.3986250039E-01
                       3.3680544063E-01  7.6992623442E-01  4.6013749961E-01
                       6.8880269286E-01  1.4111244615E-01 -2.7427530705E-02
                       9.9121335591E-01  4.1479205432E-01  3.5581445951E-01
                       4.9121335591E-01  1.0852079457E+00  6.4418554049E-01
 
kptopt   1
            ngfft          72      75      75
ngkpt    2 2 2
nshiftk 1
shiftk 
0.5 0.5 0.5
ecut       30
ecutsm   0.5
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
