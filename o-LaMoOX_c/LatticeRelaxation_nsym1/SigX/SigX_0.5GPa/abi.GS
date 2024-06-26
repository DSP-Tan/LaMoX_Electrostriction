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
  1.36293015818609E+01  7.00832820586088E-01 -2.10684113209386E-03
  7.18182801413639E-01  1.35520680034883E+01  9.67832303067196E-03
 -2.81794443312380E-03  8.90226665117191E-03  1.32977480867943E+01

             xred      8.7106127994E-01  8.1819931054E-01  8.6886602084E-01
                       3.3448360905E-01  6.0473704113E-01  1.2430084572E-01
                       1.6510270243E-01  3.9546332194E-01  6.2419783178E-01
                       6.2697105949E-01  1.8116295546E-01  3.7046918407E-01
                       1.1921555681E-01  1.8923261192E-01  1.6161777510E-01
                       7.0529067424E-01  2.9814402854E-01  8.3126395919E-01
                       7.9472235329E-01  7.0177040797E-01  3.3053373216E-01
                       3.8067996019E-01  8.1056033070E-01  6.6177615729E-01
                       3.0580010152E-01  3.0394795255E-01  3.1950776403E-01
                       7.8512964771E-01  9.8528510401E-02  6.8335399276E-01
                       7.1402445055E-01  9.0209274161E-01  1.8359869796E-01
                       1.9363234341E-01  6.9740425712E-01  8.1924324410E-01
                       9.6335625784E-01  2.5086717777E-01  3.6750279078E-01
                       5.1718673941E-01  3.6693610419E-01  6.6797324931E-01
                      -1.7714058386E-02  6.3380080297E-01  1.6654174940E-01
                       5.3599108392E-01  7.4894597658E-01  8.6881938552E-01
                       2.2952693149E-01  9.5997607599E-01  1.6506062694E-01
                       2.7208986055E-01  4.0618468566E-02  6.6240349751E-01
                       8.5884957413E-01  4.7317036080E-01  8.1091016483E-01
                       6.4106517407E-01  5.2681206920E-01  3.1074989426E-01
                       2.0005249580E-01  3.3924984471E-01  9.7389401079E-01
                       9.2855515640E-01  6.9836949280E-01  5.4238561545E-01
                       3.0052493314E-01  6.6102764673E-01  4.7401597911E-01
                       5.7267358998E-01  3.0060366517E-01  4.3565297929E-02
                      -8.3948925038E-02  1.4368634733E-01  7.8862982634E-03
                       5.8567744805E-01  8.5469249734E-01  5.0956223490E-01
 
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
