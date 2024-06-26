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
  1.35749614571040E+01  6.95669914117018E-01  1.53103122647559E-01
  7.09113853925847E-01  1.35748690897546E+01 -4.18461145517114E-02
  1.52407138787326E-01 -4.97645314994914E-02  1.33101779462484E+01

             xred      8.7382159474E-01  8.1977435891E-01  8.7193598686E-01
                       3.3568358413E-01  6.0536851538E-01  1.2344221925E-01
                       1.6601896832E-01  3.9516533093E-01  6.2447036890E-01
                       6.3194474236E-01  1.8247684405E-01  3.6514884298E-01
                       1.1920639266E-01  1.9016483073E-01  1.6151077033E-01
                       7.0474323206E-01  2.9767098708E-01  8.2942343244E-01
                       7.9424941567E-01  7.0145763620E-01  3.3241783413E-01
                       3.7959300502E-01  8.1106304521E-01  6.6187880317E-01
                       3.0695877690E-01  3.0117877485E-01  3.1877074857E-01
                       7.8902657949E-01  9.6376071420E-02  6.8486322987E-01
                       7.1414528372E-01  8.9843361976E-01  1.8252184722E-01
                       1.9412814807E-01  6.9295119317E-01  8.1962361919E-01
                       9.6246694390E-01  2.5447901268E-01  3.7119867204E-01
                       5.2005910413E-01  3.6615766457E-01  6.6617790938E-01
                      -1.4278494676E-02  6.3495498920E-01  1.6725597128E-01
                       5.3527938507E-01  7.5152455795E-01  8.6521196781E-01
                       2.2650648863E-01  9.5984387418E-01  1.6040828485E-01
                       2.6600843469E-01  3.8651542655E-02  6.6728054446E-01
                       8.5926732172E-01  4.7281859721E-01  8.1381549442E-01
                       6.4140543575E-01  5.2636360507E-01  3.0884050143E-01
                       2.0142853121E-01  3.3896071093E-01  9.7425527646E-01
                       9.2486664821E-01  6.9625401870E-01  5.4376919212E-01
                       3.0191158404E-01  6.6136340647E-01  4.7326952981E-01
                       5.6781083921E-01  3.0027519416E-01  4.1832384537E-02
                      -8.7101987157E-02  1.4731925105E-01  1.3744592768E-02
                       5.8485004211E-01  8.5895236748E-01  5.0693197574E-01
 
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
