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
  1.33269286145767E+01  0.00000000000000E+00  0.00000000000000E+00
  0.00000000000000E+00  1.35922389899960E+01  6.77964959825467E-01
  0.00000000000000E+00  7.08865924653355E-01  1.35081955556319E+01

             xred      8.7040084525E-01  8.7279095531E-01  8.1904115345E-01
                       3.7040084525E-01  6.2720904469E-01  1.8095884655E-01
                       1.2420281451E-01  3.3557868256E-01  6.0502220223E-01
                       6.2420281451E-01  1.6442131744E-01  3.9497779777E-01
                       1.6136026458E-01  1.1914710795E-01  1.8931030450E-01
                       6.6136026458E-01  3.8085289205E-01  8.1068969550E-01
                       8.3125105836E-01  7.0444513100E-01  2.9839495607E-01
                       3.3125105836E-01  7.9555486900E-01  7.0160504393E-01
                       3.1907449377E-01  3.0551538921E-01  3.0374369500E-01
                       8.1907449377E-01  1.9448461079E-01  6.9625630500E-01
                       6.8362809638E-01  7.8539628589E-01  9.8540036787E-02
                       1.8362809638E-01  7.1460371411E-01  9.0145996321E-01
                       9.7393487918E-01  2.0014979519E-01  3.3916978291E-01
                       4.7393487918E-01  2.9985020481E-01  6.6083021709E-01
                       4.3393779574E-02  5.7184876366E-01  3.0090676814E-01
                       5.4339377957E-01  9.2815123634E-01  6.9909323186E-01
                       3.6737298091E-01  9.6277097585E-01  2.4987980278E-01
                       1.6795364142E-01 -1.6389007476E-02  6.3282127764E-01
                       8.6737298091E-01  5.3722902415E-01  7.5012019722E-01
                       6.6795364142E-01  5.1638900748E-01  3.6717872236E-01
                       1.6275387566E-01  2.2890223358E-01  9.5903697548E-01
                       8.1159220626E-01  8.5894635709E-01  4.7376982564E-01
                       3.1159220626E-01  6.4105364291E-01  5.2623017436E-01
                       6.6275387566E-01  2.7109776642E-01  4.0963024516E-02
                       8.0810641644E-03 -8.5062907059E-02  1.4432429391E-01
                       5.0808106416E-01  5.8506290706E-01  8.5567570609E-01
 
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
