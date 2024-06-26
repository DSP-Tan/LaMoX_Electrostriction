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
  1.36006282690771E+01  7.10237049372302E-01 -2.60691551649322E-03
  7.23368274894427E-01  1.36048660427926E+01  1.08252628383008E-02
 -3.37209540171828E-03  1.01528176194428E-02  1.32194068441138E+01

             xred      8.6914416756E-01  8.1858783869E-01  8.6745269142E-01
                       3.3434324119E-01  6.0461169652E-01  1.2426754265E-01
                       1.6501040086E-01  3.9568196827E-01  6.2403993823E-01
                       6.2808505263E-01  1.8060239122E-01  3.6942482768E-01
                       1.1982518785E-01  1.8920796800E-01  1.6186741817E-01
                       7.0556353764E-01  2.9829645900E-01  8.3114620244E-01
                       7.9435386694E-01  7.0158975320E-01  3.3055811346E-01
                       3.8004327361E-01  8.1057396803E-01  6.6239223298E-01
                       3.0631787484E-01  3.0382802721E-01  3.1974364724E-01
                       7.8625895720E-01  9.9490095039E-02  6.8240872592E-01
                       7.1269432599E-01  9.0133695137E-01  1.8306728898E-01
                       1.9285798526E-01  6.9808117143E-01  8.1946909878E-01
                       9.6388286394E-01  2.5162750916E-01  3.6894886849E-01
                       5.1725279440E-01  3.6657259238E-01  6.6657614551E-01
                      -1.8020001702E-02  6.3455391144E-01  1.6498730479E-01
                       5.3527544067E-01  7.4775737024E-01  8.7086335582E-01
                       2.3039085952E-01  9.6090369397E-01  1.6528360575E-01
                       2.7202353391E-01  4.0016587325E-02  6.6255835043E-01
                       8.5822942751E-01  4.7342351385E-01  8.1137256496E-01
                       6.4165430157E-01  5.2649474693E-01  3.1103700163E-01
                       1.9965222186E-01  3.3892060382E-01  9.7284647762E-01
                       9.3062174879E-01  6.9736912230E-01  5.4227951729E-01
                       3.0105426820E-01  6.6175660748E-01  4.7307402829E-01
                       5.7101041053E-01  3.0099706271E-01  4.3545554539E-02
                      -8.5174331158E-02  1.4390750624E-01  9.1034768155E-03
                       5.8764859036E-01  8.5381088417E-01  5.1168602010E-01
 
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
