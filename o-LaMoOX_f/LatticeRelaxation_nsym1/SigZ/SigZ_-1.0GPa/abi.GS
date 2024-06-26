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
  1.33397997303930E+01  8.60837800292505E-04 -8.98608061921592E-04
  7.16588138027339E-04  1.36098703962858E+01 -6.72715956416236E-01
 -8.79787392374689E-04 -7.05185159571484E-01  1.34545752200741E+01

             xred      8.7595899781E-01  8.3592005052E-01  8.9499652502E-01
                       3.7570227781E-01  6.6406537736E-01  1.0501931602E-01
                       1.2912535980E-01  3.7372367768E-01  6.8103225871E-01
                       6.2884508357E-01  1.2639830752E-01  3.1879590632E-01
                       1.6857053435E-01  2.0420792667E-01  2.0154630503E-01
                       6.6881884625E-01  2.9645523051E-01  7.9884490743E-01
                       8.3849007868E-01  6.1850177038E-01  3.1055839447E-01
                       3.3876459585E-01  8.8137581755E-01  6.8917832039E-01
                       3.1640653645E-01  2.8501128409E-01  4.0186914744E-01
                       8.1598953210E-01  2.1628311718E-01  5.9802486992E-01
                       6.8113265419E-01  8.0494589990E-01  1.9608024197E-01
                       1.8112199355E-01  6.9496757675E-01  8.0400060784E-01
                       9.5652016154E-01  7.1987011801E-02  1.9966845111E-01
                       4.5672763128E-01  4.2847481276E-01  8.0041820748E-01
                       2.6148651509E-02  7.0047510750E-01  1.6134873861E-01
                       5.2604442026E-01  7.9966767571E-01  8.3898622650E-01
                       3.3149162676E-01  1.0163006174E+00  1.3224553061E-01
                       1.3263291331E-01  3.7273569700E-02  7.4955975430E-01
                       8.3188891983E-01  4.8380045099E-01  8.6901802196E-01
                       6.3299925671E-01  4.6201367891E-01  2.4950806518E-01
                       1.8869743696E-01  3.5878143313E-01  1.0256543587E+00
                       8.3708916771E-01  7.2724273209E-01  5.4203458394E-01
                       3.3776280913E-01  7.7140214624E-01  4.5815388655E-01
                       6.8841608432E-01  1.4062252439E-01 -2.6297908754E-02
                       9.9252382654E-01  4.1500275205E-01  3.5507486446E-01
                       4.9213060366E-01  1.0850994512E+00  6.4468041887E-01
 
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
