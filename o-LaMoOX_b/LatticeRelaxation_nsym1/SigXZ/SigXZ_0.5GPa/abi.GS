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
  1.35937193178732E+01 -8.02493322606453E-04  8.31524373627035E-01
 -7.50011822625768E-04  1.32974742576683E+01 -1.03949993565153E-03
  8.25308809348180E-01 -1.77350338789750E-03  1.35868028100310E+01

             xred      8.1687814605E-01  8.6835718775E-01  8.6784778858E-01
                       3.9579134609E-01  6.2338254656E-01  1.6669609980E-01
                       1.8358138238E-01  3.6846642093E-01  6.3272140801E-01
                       6.0391393865E-01  1.2322404985E-01  3.3327101073E-01
                       1.8952329364E-01  1.6190021234E-01  1.2075187891E-01
                       7.0199122608E-01  3.3074147643E-01  7.9317262131E-01
                       8.1014554971E-01  6.6170196358E-01  3.7940482236E-01
                       2.9839138875E-01  8.3119407457E-01  7.0703251620E-01
                       3.0260376924E-01  3.1903492289E-01  3.0784728006E-01
                       9.0278154649E-01  1.8378154519E-01  7.1123576303E-01
                       6.9655711902E-01  8.1902095554E-01  1.9228350451E-01
                       9.7906193322E-02  6.8396241855E-01  7.8965162882E-01
                       9.5972446612E-01  1.6502118085E-01  2.3234411226E-01
                       5.2872413080E-01  3.1005925276E-01  6.4092145187E-01
                       3.9523833495E-02  6.6530756076E-01  2.6682612978E-01
                       4.7180041442E-01  8.0999997475E-01  8.5910045059E-01
                       3.3712668872E-01  9.7351069866E-01  1.9889607127E-01
                       3.0494777273E-01  4.2147505572E-02  5.7102122060E-01
                       6.9542940061E-01  5.4205876810E-01  9.2849033221E-01
                       6.6245257107E-01  4.7344001811E-01  3.0090710290E-01
                       2.5374863692E-01  3.6928323381E-01  9.6520636652E-01
                       7.4615404343E-01  8.6915350553E-01  5.3500413090E-01
                       3.6599555197E-01  6.6602607879E-01  5.1814384494E-01
                       6.3369500350E-01  1.6578624008E-01 -1.8169417472E-02
                       1.4425753901E-01  1.1893798100E-02 -8.5723263575E-02
                       8.5635504779E-01  5.1154440998E-01  5.8511514490E-01
 
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
