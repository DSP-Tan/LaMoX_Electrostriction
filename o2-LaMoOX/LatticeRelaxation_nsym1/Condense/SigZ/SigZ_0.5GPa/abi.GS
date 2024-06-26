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
  1.31500825332469E+01 -6.97202165956596E-02  1.27662539691348E-01
 -7.25594947457811E-02  1.36302444212938E+01 -2.08886443774720E-01
  1.50821488755238E-01 -2.08077877692838E-01  1.37771819858386E+01

             xred      8.7784406741E-01  8.4775198946E-01  8.7200103377E-01
                       3.4172588351E-01  6.1800546070E-01  1.9676530852E-01
                       1.4078498997E-01  3.5125075236E-01  6.3862572703E-01
                       6.4194737317E-01  1.1757418935E-01  3.1150346831E-01
                       1.3604581838E-01  1.7824604375E-01  1.8699160938E-01
                       6.6162974748E-01  3.2794758710E-01  8.0866557803E-01
                       8.5085647740E-01  6.8013680242E-01  3.2658306046E-01
                       3.6496629585E-01  8.5443527129E-01  7.0523742346E-01
                       2.9547201348E-01  6.4054811643E-01  8.0547097291E-01
                       3.1907222016E-01  3.1342593072E-01  3.3722142674E-01
                       6.6426807769E-01  7.8911439969E-01  1.6200705903E-01
                       8.5478291742E-01  1.7923884033E-01  7.5820426385E-01
                       1.5361454457E-02  6.8886941402E-01  1.1666628028E-01
                       2.8659758352E-01  9.8124454906E-01  1.5518444709E-01
                       8.0969785521E-01  8.6780092092E-01  4.8933599980E-01
                       7.7128326987E-01  5.4487436713E-01  7.6305269534E-01
                       5.5693819118E-01  9.5069684959E-01  8.2967258325E-01
                       9.7434722674E-01  2.1298110012E-01  3.9719066048E-01
                       6.9952807819E-01  4.8587324175E-01  3.6276273085E-01
                       1.6875895153E-01  3.4152837799E-01  1.0085897121E+00
                       4.8061324514E-01  2.7192623393E-01  6.4717419706E-01
                       1.6738997743E-01  4.8122632140E-03  7.3208895832E-01
                       1.0795526693E+00  6.0776858765E-01  4.4388299329E-01
                       5.7561879416E-01  3.2917939985E-01  3.7567485907E-02
                       4.2560880766E-01  8.3604213806E-01  4.6998676386E-01
                      -9.5854371718E-02  8.1587546590E-02  1.0959705206E+00
 
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
