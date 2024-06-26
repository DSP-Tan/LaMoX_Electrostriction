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
  1.33046139052284E+01 -2.23805295389581E-02  1.66921470621203E-01
 -1.92345930958790E-02  1.35774370093276E+01  6.66829499272393E-01
  1.66868979436529E-01  6.93353882088769E-01  1.35767960726518E+01

             xred      8.6082656606E-01  8.6258735704E-01  8.1492776049E-01
                       3.7644635282E-01  6.1620257835E-01  1.7565229485E-01
                       1.2585491659E-01  3.3233864240E-01  6.0685549927E-01
                       6.2349233280E-01  1.6259890356E-01  3.9513327821E-01
                       1.6027246961E-01  1.1831037736E-01  1.8891763624E-01
                       6.6276404661E-01  3.8072170799E-01  8.0951631102E-01
                       8.3288982410E-01  7.0306823649E-01  2.9808055356E-01
                       3.2904880155E-01  7.9446289468E-01  7.0119620373E-01
                       3.2030224540E-01  3.0151099530E-01  3.1303282773E-01
                       8.1830698848E-01  1.9030381588E-01  7.0595020304E-01
                       6.8384644221E-01  7.8023033654E-01  1.0205679380E-01
                       1.8433091826E-01  7.0898079260E-01  9.0367311687E-01
                       9.7280684976E-01  2.0175951110E-01  3.4317470477E-01
                       4.7530999025E-01  3.0246348463E-01  6.6448728230E-01
                       4.8256982416E-02  5.7719695486E-01  2.9665011707E-01
                       5.3789223846E-01  9.3548361273E-01  6.9251056563E-01
                       3.6278386072E-01  9.6044806947E-01  2.4483182709E-01
                       1.6174602792E-01 -2.0147959985E-02  6.3782486515E-01
                       8.7333762276E-01  5.3462003024E-01  7.4328552614E-01
                       6.7175750639E-01  5.1302205254E-01  3.6991786341E-01
                       1.7287836874E-01  2.4074544801E-01  9.6572441032E-01
                       8.1094545526E-01  8.5821122705E-01  4.7255626697E-01
                       3.1207525971E-01  6.4080010917E-01  5.2558924642E-01
                       6.5212869379E-01  2.8539506069E-01  4.4319358725E-02
                       2.2590149703E-03 -7.7293050406E-02  1.3741323734E-01
                       5.1744022439E-01  5.9597881172E-01  8.4672224982E-01
 
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
