VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "Sheet1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = True
Sub Test()
Range("A5:A100005").Formula = "=rand()"
Range("C5:C100005").Formula = "=IF($A5<$C$4,TRUE,FALSE)"
Range("D5:D100005").Formula = "=IF($A5<$D$4,TRUE,FALSE)"
Range("E5:E100005").Formula = "=IF($A5<$E$4,TRUE,FALSE)"
End Sub

